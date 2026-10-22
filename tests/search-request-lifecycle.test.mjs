import assert from "node:assert/strict";
import { test } from "node:test";
import {
  movieResponse,
  renderSearch,
  resolveRequest,
} from "./helpers/searchMoviesContext.mjs";

test("clears previous movies and pagination when a search has no matches", async () => {
  const search = await renderSearch(async (url) =>
    new URL(url).searchParams.has("query_term")
      ? movieResponse(undefined)
      : movieResponse([{ id: 1, title: "Previous movie" }], 100)
  );
  assert.equal(search.state.movies.length, 1);
  await search.search("no-matching-title");
  assert.deepEqual(search.state.movies, []);
  assert.equal(search.state.totalCount, 0);
  assert.equal(search.state.loading, false);
});

test("keeps an empty catalog safe for consumers that map over movies", async () => {
  const search = await renderSearch(async () => movieResponse(undefined));
  assert.deepEqual(search.state.movies, []);
  assert.equal(search.state.totalCount, 0);
  assert.equal(search.state.loading, false);
});

test("keeps newer search results when an earlier response arrives last", async () => {
  let resolveOld;
  const search = await renderSearch((url) => {
    const query = new URL(url).searchParams.get("query_term");
    if (query === "old") {
      return new Promise((resolve) => { resolveOld = resolve; });
    }
    return Promise.resolve(movieResponse([{ id: query === "new" ? 2 : 1 }]));
  });
  await search.search("old");
  await search.search("new");
  assert.equal(search.state.movies[0].id, 2);
  // Deliberately resolve even if the request was aborted: queued work must be ignored too.
  await resolveRequest(resolveOld, movieResponse([{ id: 3 }], 300));
  assert.equal(search.state.movies[0].id, 2);
  assert.equal(search.state.totalCount, 1);
});

test("an obsolete page response cannot hide the active request's loading state", async () => {
  let resolveOld;
  let resolveNew;
  const search = await renderSearch((url) => {
    if (new URL(url).searchParams.get("page") === "2") {
      return new Promise((resolve) => { resolveNew = resolve; });
    }
    return new Promise((resolve) => { resolveOld = resolve; });
  });
  await search.page(2);
  await resolveRequest(resolveOld, movieResponse([{ id: 1 }]));
  assert.equal(search.state.loading, true);
  assert.deepEqual(search.state.movies, []);
  await resolveRequest(resolveNew, movieResponse([{ id: 2 }]));
  assert.equal(search.state.loading, false);
  assert.equal(search.state.movies[0].id, 2);
});

test("aborts in-flight requests on page change and unmount", async () => {
  const signals = [];
  const search = await renderSearch((_url, options) => {
    signals.push(options?.signal);
    return new Promise(() => {});
  });
  await search.page(2);
  assert.equal(signals[0]?.aborted, true);
  assert.equal(signals[1]?.aborted, false);
  await search.unmount();
  assert.equal(signals[1].aborted, true);
});

test("finishes loading and reports active network failures", async (t) => {
  const failure = new TypeError("Network request failed");
  const log = t.mock.method(console, "error", () => {});
  const search = await renderSearch(async () => { throw failure; });
  assert.equal(search.state.loading, false);
  assert.equal(log.mock.callCount(), 1);
  assert.equal(log.mock.calls[0].arguments[1], failure);
});

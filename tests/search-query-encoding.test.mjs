import assert from "node:assert/strict";
import { test } from "node:test";
import { movieResponse, renderSearch } from "./helpers/searchMoviesContext.mjs";

for (const query of ["A&B", "A+B", "A#B", "100% Movie?", "Léon & 天空の城"]) {
  test(`preserves the complete search term ${JSON.stringify(query)}`, async () => {
    let requestedURL;
    const search = await renderSearch(async (url) => {
      requestedURL = new URL(url);
      return movieResponse([]);
    });
    await search.search(query);
    assert.equal(requestedURL.searchParams.get("query_term"), query);
    assert.equal(requestedURL.searchParams.get("page"), "1");
    assert.deepEqual([...requestedURL.searchParams.keys()], ["page", "query_term"]);
    assert.equal(requestedURL.hash, "");
  });
}

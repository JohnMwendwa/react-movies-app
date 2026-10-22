import { after, afterEach } from "node:test";
import { createServer as createHttpServer } from "node:http";
import React from "react";
import TestRenderer, { act } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "vite";

const server = await createServer({
  // Attach HMR to an unlistened server so parallel test files do not bind a port.
  server: { middlewareMode: true, hmr: { server: createHttpServer() } },
  appType: "custom",
});
const { SearchMoviesProvider, useSearchMoviesContext } =
  await server.ssrLoadModule("/src/contexts/searchMoviesContext.tsx");
const originalFetch = globalThis.fetch;
let renderer;

afterEach(async () => {
  if (renderer) {
    await act(async () => renderer.unmount());
    renderer = undefined;
  }
  globalThis.fetch = originalFetch;
});
after(async () => server.close());

export async function renderSearch(fetchImplementation) {
  globalThis.fetch = fetchImplementation;
  let state;
  function Probe() {
    state = useSearchMoviesContext();
    return null;
  }

  await act(async () => {
    renderer = TestRenderer.create(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(SearchMoviesProvider, null, React.createElement(Probe))
      )
    );
  });

  return {
    get state() {
      return state;
    },
    async search(query) {
      await act(async () => state.setQuery(query));
      // Wait for the provider's existing 500 ms debounce.
      await act(async () => new Promise((resolve) => setTimeout(resolve, 550)));
    },
    async page(page) {
      await act(async () => state.onPageChange(page));
    },
    async unmount() {
      await act(async () => renderer.unmount());
      renderer = undefined;
    },
  };
}

export function movieResponse(movies, count = movies?.length ?? 0) {
  return {
    json: async () => ({
      status: "ok",
      data: { movie_count: count, ...(movies ? { movies } : {}) },
    }),
  };
}

export async function resolveRequest(resolve, response) {
  await act(async () => resolve(response));
}

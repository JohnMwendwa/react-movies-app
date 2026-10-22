# Regression tests

Run `npm install` and `npm test`. The suite was validated with Node.js 24.15.0.

The tests load the actual TypeScript provider through Vite and render it with
React's test renderer. Fetch responses are controlled locally; no live YTS API
connection or browser download is required. Search tests wait for the existing
500 ms debounce.

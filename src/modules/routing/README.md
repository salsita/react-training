# Routing  Module

Routing capabilities for your redux app. Utilizing [`router5`](http://router5.github.io/). Storing routing state into redux state.

## Dependencies

- router5
- router5-helpers
- redux-router5
- reselect

- `helpers/empty-fn`

## Integration

1. Use `import { router5Middleware } from "redux-router5"` in your redux store, call it with created router instance which is returned from `build-router` function. `applyMiddleware(router5Middlweare(buildRouter()))`
2. Combine `routing-reducer` into your root reducer
3. Wrap your top level `render` with `router.start` function: `router.start(() => render(<HelloWorld>, document.getElementById('foobar')))`

## Public interface

- `build-router` - a function which builds a router5 router instance
- `routes` - routes definition file
- `routing-reducer` - updates app state automatically
- `routing-selectors/getCurrentRoute` - returns active route info
- `components/link` - Link component for HTML5 history transitions
- `components/route` - Route component which renders provided component based on matched route

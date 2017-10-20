# CRUD Module

CRUD module for basic read/write operations with API entities.

## Dependencies

  - reduxsauce
  - redux-saga/effects
  - `helpers/identity-fn`
  - reselect
  - redux-form


  - entity repository module
  - routing module

## Integration

Combine `crud-reducer` into your root reducer. Fork `crud-saga` into your root saga.

## Public interface

- `crud-saga` - automatically calls fetch entities for all the routes when defined
- `crud-saga/fetchEntities` - fetches a list of entities for particular route
- `crud-saga/saveEntity` - creates or updates entity
- `crud-selectors` - selectors to be used to retrieve CRUD entities
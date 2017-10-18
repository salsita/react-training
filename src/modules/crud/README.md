# CRUD Module

CRUD module for basic read/write operations with API entities.

## Dependencies

  - reduxsauce
  - redux-saga/effects
  - `helpers/identity-fn`
  - entity repository module

## Integration

Combine `crud- reducer` into your root reducer.

## Public interface

- `crud-saga/fetchEntities` - fetches a list of entities for particular route
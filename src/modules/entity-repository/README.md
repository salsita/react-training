# Entity Repository Module

A simple module exposing `normalizeAndStore` saga which normalizes denormalized data and stores them into entity repository app state. Result of normalized data is returned.

Turns:

```javascript
const users = {
  id: 1,
  name: 'John Doe',
  country: {
    id: 1,
    name: 'USA'
  }
}
```

Into:

```javascript
const repository = {
  users: {
    1: {
      id: 1,
      name: 'John Doe',
      country: 1
    }
  },
  countries: {
    1: {
      id: 1,
      name: 'USA'
    }
  }
}
```

## Dependencies

- reduxsauce
- lodash
- normalizr
- redux-saga/effects

## Integration

Combine `entity-repository-reducer` into your root reducer, implement your own selectors for data denormalization (populate all references) and use `normalizeAndStore` saga whenever you need it.

## Public interface

- `entity-repository-saga/normalizeAndStore` - normalizes data according to normalizr schema and stores it into entity repo app state
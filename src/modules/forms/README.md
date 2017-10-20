# Entity Repository Module

Module integrating [redux form](redux-form.com)

## Dependencies

- email-validator
- redux-form

## Integration

Combine `forms-reducer` into your root reducer. Use `form-field` component whenever you need to use a field in your redux form.

## Public interface

- `component/form-field` - Field component to be used in any form, just to make sure the field is automatically synced with redux-form store.
- `validations` - some utility validation functions
- `form-reducer` - reducer to be used in your root reducer
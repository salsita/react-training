# API module

API module exposing api client and some supplementary functions. For instance `wrapApiCall` which ensures safe API calls with errors handled correctly as well as mapping result.

## Dependencies

- axios

## Public interface

- `api-client` - Axios api client to be used for communicating with the API.
- `wrap-api-call` - Function to wrap API calls so that all the errors are handled correctly.
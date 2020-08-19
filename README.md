# Syllabus
https://docs.google.com/presentation/d/1w8HRmAK2HB5PuwOB0HdFeGbvntsvM3-rvHdNOPZ3lBs

# Before you begin
Install all dependencies and link executables to child projects with `npm i` in the `exercises` folder.

# Exercises
* [Exercise \#1](#exercise-1)
* [Exercise \#2](#exercise-2)
* [Exercise \#3](#exercise-3)
* [Exercise \#4](#exercise-4)
* [Exercise \#5](#exercise-5)
* [Exercise \#6](#exercise-6)
* [Exercise \#7](#exercise-7)
* [Exercise \#8](#exercise-8)
* [Exercise \#9](#exercise-9)


## Exercise \#1

The main purpose of this exercise is to try [React](https://reactjs.org/docs/) and its stateful components implemented with [React Hooks](https://reactjs.org/docs/hooks-state.html).

* Open the initial project `00-init`
* Create two [function](https://reactjs.org/docs/components-and-props.html#function-and-class-components) components (`Header` and `UserList`)

### Header component

Location: `src/modules/root/components/header.tsx`

HeaderProps:

```ts
{
  title: string
}
```

This component just renders a heading (`h1`) with a string taken from the `title` property.

* Create a function named `Header` that renders the heading
* Create an interface `HeaderProps` and use it in the `Header` component
* Use this component in the `Root` component, pass the title `'User Management'`


### UserTypes

Location: `src/modules/users/user-types.ts`

This file contains definitions of user interfaces.

* Create and export two interfaces
  * `UserName` contains two strings `firstName` and `lastName`
  * `User` is the same as `UserName`, but additionally contains an `id` (number)


### UserList component

Location: `src/modules/users/components/user-list.tsx`

This component renders a list of the users saved in the state and two buttons to add two different users.

* Create a function named `UserList` that renders
  * two buttons `Add No One` and `Add Mother of Dragons`
  * a table of users with two columns `First Name` and `Last Name`. The table displays text `No Users` when the list is empty
* The first button will add `Arya Stark` and the second one `Daenerys Targaryen`
* Every user has `id` which should be unique within the list (we will not implement deleting users)
* Create the initial state with the call of [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) from React
* Use the function returned by `useState` call to add a new user
* Use correct types
* Use this component in the `Root` component


## Exercise \#2
The main purpose of this exercise is to try stateless components.

* Continue with your previous project or open `01-react-stateful`
* Modify `UserList` component into stateless [function](https://reactjs.org/docs/components-and-props.html#function-and-class-components) component


### UserTypes

Location: `src/modules/users/user-types.ts`

* Add an `AddUser` interface, it's a function which takes `UserName` as parameter and returns `void`

### UserList component
Location: `src/modules/users/components/user-list.tsx`

Props:
```ts
{
  users: User[],
  addUser: AddUser
}
```

The functionality is the same like in the previous exercise. The only difference is that the logic will be outside the file.

* Modify the `UserList` component into a function that renders users from the `users` property (or `No Users` when the list is empty)
* Call the `addUser` function taken from the props when the user clicks on the button
* Create and use a `UserProps` interface

### Index file
Location: `src/index.tsx`

Move logic from the old `UserList` into the index file. All application data will be in a global object.

* Create a global object called `state` with 2 fields (`title` and `users`)
* Create your own function `render` that just calls [`ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render) and uses data from the global object
* Create a function called `addUser` that adds the user into the list of users and calls your `render` function
  * Please prefer immutable change of the `state` object
* Define necessary interfaces

### Root component
Location: `src/modules/root/components/root.tsx`

Props:
```ts
{
  title: string,
  users: User[],
  addUser: AddUser
}
```

Since we moved the logic into the index file and the `Root` component receives all necessary props, we need to send props into `Header` and `UserList`.

### Additional task
Try 3 different versions of the `Header` component and see when they get rendered

1. Created as a class that extends [`React.Component`](https://reactjs.org/docs/react-api.html#reactcomponent)
2. Created as a class that extends [`React.PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent)
3. Created as a [function](https://reactjs.org/docs/components-and-props.html#function-and-class-components)


## Exercise \#3
The main purpose of this exercise is to try [Redux](https://redux.js.org/).

* Continue with your previous project or open `02-react-stateless`
* Move the logic into a reducer

### UserActions
Location: `src/modules/users/user-actions.ts`

This file defines actions and action types.

* Create and export an enum `UserActionTypes` of [action types](https://redux.js.org/basics/actions) with one value `addUser = 'users/addUser'`
* Create an interface `AddUserAction` which extends `Action<T>` from `'redux'` for `users/addUser` action. In addition to the mandatory `type` property this action will contain a payload with the new user details.
  ```ts
  {
    payload: UserName
  }
  ```
* Create a function ([action creator](https://redux.js.org/basics/actions#action-creators) of `ActionCreator<A>` type from `'redux'`) called `addUser` that takes `UserName` object as parameter and returns the `AddUserAction` action.
* Create and export a new type `UserActions`, which is a union of all user actions. This is useful in the reducer when more actions are defined. Note, currently we have only one action `users/addUser`.
* Create and export an object `UserActionCreators`, which congregates all user action creators.

### usersReducer
Location: `src/modules/users/users-reducer.ts`

State:
```ts
{
  title: string,
  users: User[]
}
```

The logic from `addUser` function from the previous exercise will be in this reducer.

* Create a [reducer](https://redux.js.org/basics/reducers) function of type `Reducer<S, A>` from `'redux'`
* Use an initial state
* Modify `users` field in the state when the `users/addUser` action is dispatched
* Don't forget to return unmodified state when a different action is dispatched

### rootReducer
Location: `src/modules/root/root-reducer.ts`

This is the main reducer of the whole app. The main purpose is to combine all reducers from all modules into a single reducer.

* Import your `usersReducer`
* Use [`combineReducers`](https://redux.js.org/api-reference/combinereducers) from `redux` to create the root reducer
  * The root reducer state will be a combination of all passed reducers states, the resulting state type can be inferred from the return type:
  ```ts
  export type RootState = ReturnType<typeof rootReducer>
  ```

### Index file
Location: `src/index.tsx`

Configure all necessary things for `redux`.

* Create `store` with the [`createStore`](https://redux.js.org/api-reference/createstore) function from `redux`
  * The first argument is `rootReducer`
  * The second argument can be an `enhancer`. Use the following to setup the [`Redux DevTools Extension`](https://github.com/zalmoxisus/redux-devtools-extension)
    ```ts
    declare global {
      interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
      }
    }
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    ```
* Create a function called `dispatchAddUser` that calls [`store.dispatch`](https://redux.js.org/api/store#dispatchaction) to dispatch the `users/addUser` action
* Use data from [`store.getState()`](https://redux.js.org/api/store#getstate) in your `render` function
* Subscribe your `render` function with [`store.subscribe`](https://redux.js.org/api/store#subscribelistener) to re-render the app when an action is dispatched


## Exercise \#4
The main purpose of this exercise is to try [`React Redux`](https://react-redux.js.org/introduction/quick-start) and [`Redux Toolkit`](https://redux-toolkit.js.org/).

* Continue with your previous project or open `03-redux`
* Use [`Provider`](https://react-redux.js.org/api/provider) from `react-redux` instead of the manual re-rendering
* Use the [`React Redux hooks`](https://react-redux.js.org/api/hooks) to get Redux store data in `Header` and `UserList`
* Rewrite actions with `Redux Toolkit`

### Header component
Location: `src/modules/root/components/header.tsx`

The same component like in the previous exercise.

Props:
```ts
{
}
```

* Use [`useSelector`](https://react-redux.js.org/api/hooks#useselector) from `React Redux` to get the `title` from Redux store
* Remove the props - they are no longer needed

### UserList component
Location: `src/modules/users/components/user-list.tsx`

The same component like in the previous exercise.

Props:
```ts
{
}
```

* Use  [`useSelector`](https://react-redux.js.org/api/hooks#useselector) from `React Redux` to get the `users` list from Redux store
* Use [`useDispatch`](https://react-redux.js.org/api/hooks#usedispatch) to get the `dispatch` function of the Redux store. Use it to dispatch `users/addUser` action
* Remove the props - they are no longer needed

### Root component
Location: `src/modules/root/components/root.tsx`

Props:
```ts
{
}
```

* Remove all props because `Header` and `UserList` components don't need them anymore.


### Users slice
Location: `src/modules/users/users-slice.ts`

The same actions and reducer, but created with `Redux Toolkit`.

* Use [`createSlice`](https://redux-toolkit.js.org/api/createSlice) from `Redux Toolkit` to generate action creators and action types for user reducers.
* Move `adduser` reducer implementation to this file and pass it with the `reducer` option to `createSlice` function.
* Export `actions` and `reducer` returned by the `createSlice` function as `usersActions` and `usersReducer`.
* Define necessary interfaces


### UserActions
Location: `src/modules/users/user-actions.ts`

This file is no longer needed. The user actions are now generated in `src/modules/users/users-slice.ts`.


### usersReducer
Location: `src/modules/users/users-reducer.ts`

This file is no longer needed. The `addUser` reducer was moved to `src/modules/users/users-slice.ts`.


### Index file
Location: `src/index.tsx`

Currently, we need only `store` and we need to call `ReactDOM.render` directly with `Provider` component.

* Remove own `render` function and directly call `ReactDOM.render`
* Change the rendered component into `Provider` and put `Root` as its child
* Remove `dispatchAddUser` (the action is dispatched in the `UserList` component)
* Remove `store.subscribe` (it is not necessary with `Provider`)
* Use [`configureStore`](https://redux-toolkit.js.org/api/configureStore) function from `Redux Toolkit` instead of the `createStore`. This will by default enable the [`Redux DevTools Extension`](https://github.com/zalmoxisus/redux-devtools-extension) used in previous exercise. The `composeEnhancers` function is no longer needed.


## Exercise \#5
The main purpose of this exercise is to try [Reselect](https://github.com/reactjs/reselect).

* Continue with your previous project or open `04-react-redux`
* Create selectors and use them in `Header` and `UsersList`

### UsersSelectors
Location: `src/modules/users/users-selectors.ts`

* Create a selector called `getTitle` with [`createSelector`](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc) from `reselect`
  * This selector just returns the `title` string from the `state`
* Create a selector called `getUsers` with `createSelector`
  * This selector just returns the `users` array from the `state`
* Create a selector called `getUserList` with `createSelector`
  * This selector uses the `getUsers` selector and modifies last names to upper case

### Header component
Location: `src/modules/root/components/header.tsx`

The same component like in the previous exercise.

* Use the `getTitle` selector in `useSelector`

### UserList component
Location: `src/modules/users/components/user-list.tsx`

The same component like in the previous exercise.

* Use the `getUserList` selector in `useSelector` call
* Add a new component, which is a memoized version of `<button>`. Use [`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo).

  Props:
  ```ts
    React.ButtonHTMLAttributes<HTMLButtonElement>
  ```
* Use this memoized button in `UserList` component instead of the ordinary buttons
* Use [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback) hook from `React` to memoize the callbacks passed to memoized buttons


## Exercise \#6
The main purpose of this exercise is to try [Redux-Saga](https://redux-saga.js.org/), [axios](https://github.com/axios/axios), and [Express](http://expressjs.com/).

* Continue with your previous project or open `05-reselect`
* Create a simple server that allows you to add a new user and get a list of all users
* Move the logic of adding a new user to the server
* Create sagas that handle communication with the server

### package.json
Location: `package.json`

* Change the `start` script into the following
  ```json
  "start": "concurrently \"npm run start-fe\" \"npm run start-be\"",
  "start-fe": "react-scripts start",
  "start-be": "cd backend && nodemon server.ts",
  ```
* Add `proxy` into the root to correctly handle CORS
  * `"proxy": "http://localhost:3001"`

### Server file
Location: `backend/server.ts`

A simple `express` server that has 2 routes `GET /users` and `POST /users`.

* Create a [server with `express`](http://expressjs.com/en/4x/api.html#app)
* [Use](http://expressjs.com/en/4x/api.html#app.use) [`express.json()`](http://expressjs.com/en/4x/api.html#express.json) and [`express.urlencoded()`](http://expressjs.com/en/4x/api.html#express.urlencoded) middleware
* Create the route `GET /users` that returns all users from the user list
  * Users can be stored in an array
* Create the route `POST /users` that
  * generates a new `id`
  * adds a new user into the user list (`firstName` and `lastName` can be taken from `req.body`)
  * returns the new user (`id` is included)

### TypeScript configuration for BE
Location: `backend/tsconfig.json`

A simple TypeScript configuration file.

* Extend the `tsconfig-base.json` located in the `exercises` directory
* In the compiler options setup `commonjs` module, which is needed for Node.js

### API Client
Location: `src/modules/api/api-client.ts`

This file contains an API client with `axios` that is used to make requests to the BE server.

* Use [`axios.create`](https://github.com/axios/axios#creating-an-instance) to create the client
* Set `baseURL: 'http://localhost:3000'` in the config

### UsersEffects
Location: `src/modules/users/users-effects.ts`

This file defines all effect functions that perform the corresponding requests to API. We need only 2 effects right now - `getUsers` and `addUser`.

* Create a function `getUsers` that makes a request to `GET /users`
* Create a function `addUser` that makes a request to `POST /users` and sends an object with `firstName` and `lastName` in the request body

### UsersSlice
Location: `src/modules/users/users-slice.ts`

We will need a new reducer to store fetched users into the state.
* Add a new case reducer called `usersLoaded` to do it

Users are added on the BE side, so the `addUser` reducer is not needed anymore, but the action type still is.
* Remove the `addUser` reducer
* Add the `addUser` action creator to the `usersActions` export object
  * Use [`createAction`](https://redux-toolkit.js.org/api/createAction) function to create the action creator with type `users/addUser`
    * You can use a [literal type](https://redux-toolkit.js.org/usage/usage-with-typescript#createaction) for `action.type` for stronger typing of sagas

### usersSaga
Location: `src/modules/users/users-saga.ts`

This file is used to create [redux sagas](https://redux-saga.js.org/docs/api/) that handle side effects to communicate with the BE server. We need 2 sagas to handle all API effects we have - `getUsers` and `addUser`.

* Create a saga called `getUsers` that
  * calls `UsersEffects.getUsers`
  * dispatch the `users/usersLoaded` action with `data` taken from the response
* Create a saga called `addUser` that
  * calls `UsersEffects.addUser`
  * runs the `getUsers` saga to refresh the user list
* Don't forget to use `try/catch` in both sagas
* Create a saga called `usersSaga` (only this one needs to be exported - with `export default`) that
  * runs the `getUsers` saga immediately (we don't have a router currently)
  * runs the `addUser` saga when the `users/addUser` action is dispatched (hint: use `takeEvery`)

### rootSaga
Location: `src/modules/root/root-saga.ts`

This file simply starts all sagas that are needed in the whole application. Currently, we have only our own `usersSaga`.

* Create and export a saga called `rootSaga` that runs `usersSaga` (hint: use `fork`)

### Index file
Location: `src/index.tsx`

Configure all necessary things for `redux-saga`.

* Create `sagaMiddleware` with a function [`createSagaMiddleware`](https://redux-saga.js.org/docs/api/) (default export from `redux-saga`)
* Pass the `sagaMiddleware` to the [`configureStore`](https://redux-toolkit.js.org/api/configureStore) call with the `middleware` property
* Run your root saga with `sagaMiddleware.run(rootSaga)`


## Exercise \#7
The main purpose of this exercise is to try [`normalizr`](https://github.com/paularmstrong/normalizr).

* Continue with your previous project or open `06-redux-saga`
* Add skills and [regnal number](https://en.wikipedia.org/wiki/Regnal_number) to users
* Save users and skills into the entity repository in the normalized form

### Server file
Location: `backend/server.ts`

The server adds skills and set the correct regnal number to every user.

The entity interfaces are
```ts
interface Skill {
  id: string // e.g. skill-1
  name: string
}

interface UserSkill {
  skill: Skill
  level: number
}

interface User extends UserName {
  id: string; // e.g. user-1
  regnalNumber: number // use Arabic numerals
  skills: Array<UserSkill>
}
```

* Create few skills (use `string` ids for easier understanding of `normalizr`)
* When a new user is added
  * Set `id` of the user as a `string` (e.g. `user-1` instead of `1`)
  * Compute the correct regnal number for the user
  * Add some skills to the user where `level` is somehow based on the regnal number (it doesn't matter what equation you use - it can be for example `level = 3 * regnalNumber`)

### Entities Schema
Location: `src/modules/entities/entities-schema.ts`

This file contains [`normalizr` schema](https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#schema) of our entities.

* Create schema for `Skill`, `UserSkill`, and `User` [entities](https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#entitykey-definition---options--)
* If an entity doesn't have the `id` field, you need to specify one with `idAttribute`, which can be a `string` (name of the `id` field) or a function that creates the value of `id` field

### Entities types
Location: `src/modules/entities/entities-types.ts`

This file contains type definitions for normalized user data.

* Add and export `Skill`, `UserSkill` and `User` types, which are the normalized version of types defined in `src/modules/users/user-types.ts`.
  * The normalized version uses the `id` of an entity instead of nested types:
    ```ts
    interface UserSkill {
      id: string
      skill: string
      level: number
    }
    ```
* Add and export the `UserEntities` type, which describes `entities` created by the user data normalization:
  ```ts
  {
    skills: { [key: string]: Skill }
    userSkills: { [key: string]: UserSkill }
    users: { [key: string]: User }
  }
  ```
* Add and export the `UserIds` type (a string array), which describes the user `id`s returned from the `normalize` call (`result` property).
* Add and export the type `NormalizedUserEntities = NormalizedSchema<UserEntities, UserIds>`, which describes the type of data returned from the `normalize` call.


### usersSlice
Location: `src/modules/users/users-slice.ts`

State:
```ts
{
  title: string,
  userIds: string[]
}
```

* Update this reducer to store `userIds` instead of `users`
* Update the action payload to be the of the `NormalizedUserEntities` type

### Entities slice
Location: `src/modules/entities/entities-slice.ts`

This file contains an entities reducer, which manages the entities repository.

* Create an `EntitiesState` interface, which extends `UserEntities`. This state would contain all normalized entities used in the application.
* Let's setup the `updateEntities` [case reducer](https://redux-toolkit.js.org/usage/usage-with-typescript#createslice) which would make a recursive merge of current state with the newly received entities. This is a common approach in the applications where the entities are fetched in small portions.
  * This function has two arguments:
    * state of type `EntitiesState`
    * action, which payload may contain any part of the state
  * Use the [mergeWith](https://lodash.com/docs/4.17.15#mergeWith) function from the [Lodash](https://lodash.com/) library.
  * Create and use the customizer which changes the merge strategy for arrays by always choosing the new value. Our customizer will take `objValue` and `srcValue` as arguments and return `srcValue` if both arguments are arrays. For other types it will return undefined, which indicates no customization.
* Create the `entities` slice with `createSlice` function
  * Use `EntitiesState` for the state type.
  * Add an [extra reducer](https://redux-toolkit.js.org/api/createSlice#extrareducers) which updates the entities repository by calling `updateEntities` when the `users/usersLoaded` action is dispatched.
    * Use the ["builder callback approach"](https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers) to ensure the type safety.
* Export the `entitiesReducer`

### rootReducer
Location: `src/modules/root/root-reducer.ts`

The created entities reducer needs to be added into the root reducer.

* Import the created `entitiesReducer` and add it to the root reducer

### usersSaga
Location: `src/modules/users/users-saga.ts`

Currently, the same denormalized data that comes from the BE server are stored in the state. We need to normalize the data from response and store them in the entity repository.

* Call `normalize(data, schema)` to normalize the fetched data
* Dispatch the `users/usersLoaded` action to save the normalized data in the store

### EntitiesSelectors
Location: `src/modules/entities/entities-selectors.ts`

Since data are stored in the normalized form in the state, we need to denormalize them for easier access to values.

* Create 3 selectors (`getUsers`, `getSkills`, and `getUserSkills`) that return the corresponding entities in the denormalized form
  * Hint: use [`mapValues`](https://lodash.com/docs/4.17.15#mapValues) from `lodash` to create a new object with keys identical to source object.

### UsersSelectors
Location: `src/modules/users/users-selectors.ts`

The users reducer doesn't store the entity data, it stores `id`s only.

* Create a new selector called `getUserIds` that returns `id`s from the redux state
* Modify the `getUsers` selector to map users `id`s from the users reducer into denormalized users
* Modify the `getUserList` selector to return the users with
  * upper cased last names
  * converted regnal number into Roman numerals (use the [`roman-numerals`](https://github.com/joshleaves/roman-numerals) library)

### UserList component
Location: `src/modules/users/components/user-list.ts`

* Print `regnalNumber` next to the first name


## Exercise \#8
The main purpose of this exercise is to try [`router5`](http://router5.github.io/) and `@salsita/react-crud`.

* Continue with your previous project or open `07-normalizr`
* This exercise uses [react-modules](https://github.com/salsita/react-modules) packages
* Create a page for user detail (e.g. at `/users/user-1`)
* Use `@salsita/react-crud` to automate entity fetching

### Server file
Location: `src/server.js`

Add a route to fetch a single user.

* Add a route for `GET /users/:id` and return the corresponding user in the response

### rootReducer
Location: `src/modules/root/root-reducer.js`

We need to add all required reducers into the root reducer.

* Import `import { apiReducer as api } from '@salsita/react-api';`
* Import `import { crudReducer as crud } from '@salsita/react-crud';`
* Import `import { routerReducer as router } from '@salsita/react-router';`
* Add all three reducers into the root reducer

### Routes
Location: `src/router/routes.js`

This file contains names and configuration of routes.

* Create 2 routes
  * `const USERS_LIST = 'users'` for the list of all users
  * `const USER_DETAIL = 'users.detail'` for the detail page (with `id` parameter)

### Index file
Location: `src/index.js`

Use `buildRouter` and `buildStore` functions for easier configuration of `redux`, `router5`, and `redux-saga`.

* Import `import { buildRouter } from '@salsita/react-router';`
* Import `import { buildStore } from '@salsita/react-core';`
* Create a router with the `buildRouter(routes, options)` function
  * You can specify the `defaultRoute` in the `options` argument
* Create the redux store with the `buildStore(rootReducer, rootSaga, router)` function
* Start the router

### UserDetail component
Location: `src/modules/users/components/user-detail.js`

Props:
```ts
{
  userDetail: {
    firstName: string,
    lastName: string,
    regnalNumber: string,
    skills: Array<{
      skill: {
        name: string
      },
      level: number
    }>
  }
}
```

This component displays a user detail with skills information.

* Create `UserDetail` that displays the data

### UsersRoute component
Location `src/modules/users/components/users-route.js`

Props:
```ts
{
  route: {
    name: string
  }
}
```

This component takes care about the proper routing in the users module.

* Render the `UserDetail` component if the current route ends with `detail` (hint: use `endsWithSegment` from [`router5-helpers`](https://github.com/router5/router5/tree/master/packages/router5-helpers))
* Otherwise, render the `UsersList` component

### UsersList component
Location: `src/modules/users/components/users-list.js`

We need to add links to the detail page. Navigate to the detail page when the user clicks on the first name.

* Import `import { Link } from '@salsita/react-router';`
* Use the `Link` component and set `name` and `params` props on it

### Root component
Location: `src/modules/root/components/root.js`

Use the `Route` component from `@salsita/react-router` for easier routing. You can also use `ApiErrorToast` and `ApiLoader` to display a basic error toast and loading spinner. The data for both components are automatically stored in the state from `@salsita/react-api`.

* Import `import { Route } from '@salsita/react-router';`
* Use the `Route` component instead of `UsersList` and set `startsWith` and `component` props on it
* Import `import { ApiErrorToast, ApiLoader } from '@salsita/react-api';`
* Use `Portal` from `react-portal` to render `ApiErrorToast` and `ApiLoader`

### CRUD Saga file
Location: `src/modules/crud/crud-saga.js`

This file contains two important functions for the CRUD module - `mapEntityToSaveParams` and `mapRouteToFetchParams`. Both of them return params that are used for saving or fetching entities.

* Create a function called `mapEntityToSaveParams(entity, isUpdate)` that
  * has the following arguments
    * `entity` is a `string` that describes the name of the entity currently being saved
    * `isUpdate` is a `boolean` flag to distinguish between create and update
  * returns the following object
    ```ts
    {
      effect: (data: any) => void, // an effect to save the entity
      schema: Schema // a schema from normalizr
    }
    ```
* Create a function called `mapRouteToFetchParams(route)` that
  * receives the name of the current route
  * returns the following object
    ```ts
    {
      [identifier]: { // this can be any string that identifies the fetched data
        effect: (...effectParams: any) => data, // an effect to fetch the entity
        schema: Schema // a schema from normalizr
        effectParamsFactory: (state: RootState) => any[] // the result is used for effectParams
      }
    }
    ```

### CRUD Entities
Location: `src/modules/crud/crud-entities.js`

This file has only string constants with entity names for `mapEntityToSaveParams`

* Create a constant for `USER` entity

### CrudSelectors
Location: `src/modules/crud/crud-selectors.js`

The CRUD module takes care about automatic storing of entity `id`s. Since the `id`s won't be in the `usersReducer` anymore, we need to slightly update `UsersSelectors` and move them into `CrudSelectors`.

* Create the following selectors that read the data from CRUD and Entities modules
  * `getUsersList`
  * `getUserDetail`

### UsersSelectors
Location: `src/modules/users/users-selectors.js`

* Update the `getUsersList` selector (hint: use `CrudSelectors`)

### rootSaga
Location: `src/modules/root/root-saga.js`

Start `crudSaga` to automatically fetch entities.

* Import `import { crudSaga } from '@salsita/react-crud';`
* Start `crudSaga` (it needs `mapRouteToFetchParams` as an argument)

### UsersEffects
Location: `src/modules/users/users-effects.js`

We need a new effect to fetch a single user. Also, we should use `wrapApiCall` from `@salsita/react-api` for proper error handling.

* Import `import { wrapApiCall } from '@salsita/react-api';`
* Wrap all effects with `wrapApiCall(effect)`
* Add a new effect called `getUser`

### usersSaga
Location: `src/modules/users/users-saga.js`

The CRUD module handles entity fetching so we don't need the `getUsers` saga anymore. Use the `saveEntity` saga from `@salsita/react-crud` for better error handling and `fetchEntities` to refresh the user list.

* Call the `saveEntity(data, entity, mapEntityToSaveParams)` saga (instead of the direct effect call) that
  * has the following arguments
    * `data` is an object that is sent to the BE server
    * `entity` is a `string` that describes the name of the entity currently being saved
    * `mapEntityToSaveParams` is a function that defines defines save params (`effect` and `schema`) to use
  * returns the response from the server (you don't have to use `.data` field)
* Call the `fetchEntities(route, mapRouteToFetchParams)` saga (to refresh the user list) that
  * has the following arguments
    * `route` is the name of the route you want to refresh
    * `mapRouteToFetchParams` is a function that defines fetch params (`effect` and `schema`) to use

### UsersActions
Location: `src/modules/users/users-actions.js`

We don't need the `USERS_LOADED` action anymore.

* Delete the `usersLoaded` action creator

### usersReducer
Location: `src/modules/users/users-reducer.js`

State:
```ts
{
  title: string
}
```

* Delete the unused `usersLoaded` action handler


## Exercise \#9
The main purpose of this exercise is to try [Redux Form](https://redux-form.com/).

* Continue with your previous project or open `08-router5`
* This exercise uses [react-modules](https://github.com/salsita/react-modules) packages
* Create forms for creating and updating users

### Server file
Location: `src/server.js`

Add routes that updates a user and fetches skills. Modify the route that saves a new user.

* Add a route for `PATCH /users/:id` that updates the user and returns the updated user in the response
* Add a route for `GET /skills` that returns all skills
* Modify the route `POST /users/:id` and add `skills` field into the request body

### rootReducer
Location: `src/modules/root/root-reducer.js`

We need to add the `form` reducer into the root reducer.

* Import `import { formsReducer as form } from '@salsita/react-forms';`
* Add the `form` reducer into the root reducer

### Routes
Location: `src/router/routes.js`

* Create a new route `const USER_CREATE = 'users.create'` for the form that creates a new user

### UsersEffects
Location: `src/modules/users/users-effects.js`

We need new effects to update a user and fetch all skills.

* Add a new effect called `updateUser`
* Add a new effect called `getSkills`

### UsersActions
Location: `src/modules/users/users-actions.js`

Currently, we have only one action called `ADD_USER` that is dispatched when a user clicks on one of the buttons. Since we will use this action to create or update a user, let's rename it to `SAVE_USER`.

* Rename the `ADD_USER` action to `SAVE_USER`

### CRUD Saga file
Location: `src/modules/crud/crud-saga.js`

We will need a list of all skills to display them in the create/edit form. We also have a new effect called `updateUser` so we can use it in `mapEntityToSaveParams`.

* Fetch `skills` in the `USERS_LIST` route
* Add the `updateUser` effect into `mapEntityToSaveParams` (hint: use the `isUpdate` argument to distinguish between create and update)

### CrudSelectors
Location: `src/modules/crud/crud-selectors.js`

* Add a selector called `getSkills`

### UserForm component
Location: `src/modules/users/components/user-form.js`

This [form component](https://redux-form.com/7.3.0/docs/api/reduxform.md/) has fields for `firstName`, `lastName`, and `skills` where a single user can have multiple `skills`.

* Use `FormField` from `@salsita/react-forms` for
  * `firstName`
  * `lastName`
* Use `FormFieldSelect` from `@salsita/react-forms` for `skills`
* Since a user can have multiple skills, implement adding and deleting of skills with the [`FieldArray`](https://redux-form.com/7.3.0/docs/api/fieldarray.md/) component from `redux-form`
* Implement the following [field-level](https://redux-form.com/7.3.0/examples/fieldlevelvalidation/) validations
  * `firstName` cannot be an empty string
  * `lastName` cannot be an empty string
  * `skills` cannot be empty and must be unique
* You can use some validation functions from `@salsita/react-forms`

### UserCreate component
Location: `src/modules/users/components/user-create.js`

Props:
```ts
{
  saveUser: (formData: object) => void
}
```

This component just renders the `UserForm` component to create a new user.

### UserDetail component
Location: `src/modules/users/components/user-detail.js`

Props:
```ts
{
  userDetail: {
    firstName: string,
    lastName: string,
    regnalNumber: string,
    skills: Array<{
      skill: {
        name: string
      },
      level: number
    }>
  },
  saveUser: (formData: object) => void
}
```

This component just renders the `UserForm` component with `initialValues` to edit a user.

### UsersList component
Location: `src/modules/users/components/users-list.js`

Props:
```ts
{
  users: Array<{
    id: number,
    firstName: string,
    lastName: string,
    regnalNumber: string
  }>
}
```

* Remove both buttons
* Add a `Link` to the `USERS` page

### UsersRoute component
Location `src/modules/users/components/users-route.js`

We want to display the `UserCreate` component in a modal dialog while the users list is shown in the background.

* Render both `UsersList` and `UserCreate` on the `create` route
* Use `Portal` to put the `UserCreate` component in the modal dialog

### usersSaga
Location: `src/modules/users/users-saga.js`

There are couple of things we need to update in our sagas.

* Currently, our saga handles update as well so it is good to rename it to `saveUser` since the new name of the action that starts the saga is `SAVE_USER`.
  * Update names of the action and saga
* Since the `saveUser` saga can be called from two routes now (`USERS_LIST` and `USER_DETAIL`), we want to redirect the user into `USERS_LIST` route after the successful submission.
  * Import `import { RouterActions } from '@salsita/react-router';`
  * Use the `RouterActions.Creators.navigateTo(routeName)` action to perform the redirect
* Since we use forms for creating and updating users, we should add the 4th argument to the `saveEntity` saga, which is the name of the form that was submitted

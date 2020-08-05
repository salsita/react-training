import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from 'modules/root/components/root'
import { rootReducer } from 'modules/root/root-reducer'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'modules/root/root-saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

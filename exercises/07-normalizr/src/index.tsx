import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { Root } from 'modules/root/components/root'
import { rootReducer } from 'modules/root/root-reducer'
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

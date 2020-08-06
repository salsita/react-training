import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { Root } from 'modules/root/components/root'
import { rootReducer } from 'modules/root/root-reducer'

const store = configureStore({
  reducer: rootReducer,
})

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

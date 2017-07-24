import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store/index'
import styles from './styles/main.css'
import { BrowserRouter } from 'react-router-dom'

import { fetchPosts } from './actions'

window.React = React

const store_ = storeFactory()
store_.dispatch(fetchPosts())

render(
  <Provider store={store_}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById("react-container")
)

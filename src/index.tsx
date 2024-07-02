import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './app'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

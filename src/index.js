import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { Store } from './store/store'
import { Provider } from 'react-redux'
import GlobalStyles from 'styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

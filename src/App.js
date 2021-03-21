import React from 'react';
import './assets/global.css'
import TodoList from './components/TodoList';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store} >
      <TodoList />
    </Provider>
  );
}

export default App;

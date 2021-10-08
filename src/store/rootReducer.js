import { combineReducers } from 'redux'
import { todoListReducer } from './action/ducks/reducers'

const rootReducer = combineReducers({
  todoListReducer,
})

export default rootReducer

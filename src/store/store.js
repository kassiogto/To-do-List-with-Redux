import { createStore } from 'redux'

import { reducers } from './reducer'

export const Store = createStore(reducers)

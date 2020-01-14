import {createStore,applyMiddleware} from 'redux'
import {finalReducer } from './reducer'

const store = createStore(finalReducer);

export default store
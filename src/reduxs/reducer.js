import { ADDNAME, ADDAGE } from './action'
import { combineReducers } from 'redux' //合并

function addName(state = '游客', action) { //形参默认值
  switch (action.type) {
    case ADDNAME:
      return action.data
    default:
      return state
  }
}

function addAge(state = 0, action) {
  switch (action.type) {
    case ADDAGE:
      return action.data
    default:
      return state
  }
}

export const finalReducer = combineReducers({
  addName,addAge
})
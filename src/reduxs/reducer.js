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


// import { combineReducers } from "redux";
// // 引入recommend页面的store(下面可以暂时不写,跳到下第3小结)
// import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'

// // 将多个reducer合并
// const cRducer = combineReducers({
//    // 下面可以暂时不写(下面可以暂时不写,跳到下第3小结)
//   recommend: recommendReducer
// })
// export default cRducer

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import { Provider, connect } from 'react-redux'
import store from './reduxs/index'
import { addNameCreater, addAgeCreater } from './reduxs/action'

const NewApp = connect(
  state => ({
    lastname:state.addName,
    lastage:state.addAge
}),
  {addNameCreater, addAgeCreater}
)(App)


ReactDOM.render((
  <Provider store={store}>
    <NewApp/>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

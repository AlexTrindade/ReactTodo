var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
import Login from 'app/components/Login.jsx';
import firebase from 'app/firebase';


var requireLogin = (nextSatate, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  };
  next();
};

var redirectIfLogin = (nextSatate, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  };
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLogin}/>
    </Route>
  </Router>
)

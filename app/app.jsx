var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import firebase, {firebaseRef} from 'app/firebase/';


// store.subscribe(() => {
//   var state = store.getState();
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

var todosRef = firebaseRef.child('todos');

store.dispatch(actions.startAddTodos());

todosRef.on('child_changed', (snapshot) => {
  console.log('getState', store.getState().todos);
  store.dispatch(actions.updateTodo(snapshot.key, snapshot.val()));
});

todosRef.on('child_removed', (snapshot) => {
  store.dispatch(actions.removeTodo(snapshot.key));
});

// todosRef.on('child_added', (snapshot) => {
//   store.dispatch(actions.addTodo(snapshot.val()));
// });

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);

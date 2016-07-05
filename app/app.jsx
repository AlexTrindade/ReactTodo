var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase, {firebaseRef} from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
    observar(user.uid);
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

function observar(uid) {
  var todosRef = firebaseRef.child('users/' + uid + '/todos');

  todosRef.on('child_changed', (snapshot) => {
    store.dispatch(actions.updateTodo(snapshot.key, snapshot.val()));
  });

  todosRef.on('child_removed', (snapshot) => {
    store.dispatch(actions.removeTodo(snapshot.key));
  });
};

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);

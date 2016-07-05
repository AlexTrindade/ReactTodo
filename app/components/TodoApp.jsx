import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';
import firebase from 'app/firebase';

export var TodoApp = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render() {
    //var {auth} = this.props;
    //console.log('ID do usuário: ', auth.uid);
    return (
      <div>
        {/*<div className="page-actions float-left">
          Welcome &nbsp; <span className="color-red">{firebase.auth().currentUser.providerData[0].displayName}</span>
        </div>*/}
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect((state) => {
  return state;
})(TodoApp);

var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToogle: function (id) {
    var updatedTodos = this.state.todos.filter((todo) => {
      if (todo.id === id) {
          todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    })
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToogle={this.handleToogle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;

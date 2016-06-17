var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoEdit = require('TodoEdit');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      isEditing: false,
      todoEditing: undefined,
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
  handleDelete: function(id) {
    console.log(id);
    var updatedTodos = TodoAPI.deleteTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    })
  },
  handleUpdateTodo: function(todoToUpdate) {
    var updatedTodos = this.state.todos.filter((todo) => {
      if (todo.id === todoToUpdate.id) {
          todo.text = todoToUpdate.text;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
      isEditing: false,
      todoEditing: undefined

    })
  },
  handleEdit: function(id) {
    this.setState({
      isEditing: true,
      todoEditing: TodoAPI.editTodo(this.state.todos, id)
    });
    //console.log("Coninue editig: ", id);
  },
  render: function () {
    var {todos, showCompleted, searchText, isEditing, todoEditing} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    var editContainer = isEditing ? "editing" : "notEditing";

    var handle = this.handleUpdateTodo;

    var renderEditing = function() {
      if (isEditing) {
        return (
          <TodoEdit updateTodo={handle} todoToEdit={todoEditing} />
        );
      };
    };

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList onDelete={this.handleDelete} onEdit={this.handleEdit}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
            {renderEditing()}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;

var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    //alert('new todo added: ' + text);
    var number = this.state.todos.length + 1;
    var newTodos = this.state.todos;
    newTodos.push({id: number, text: text});
    //console.log(newTodos);
    this.setState({todos: newTodos});
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;

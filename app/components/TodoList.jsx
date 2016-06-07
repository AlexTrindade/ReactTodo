var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderList = function() {
      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />
      })
    }
    return (
      <div>
        <h1>Lista</h1>
        <ul>
          {renderList()}
        </ul>
      </div>
    )
  }
});

module.exports = TodoList;

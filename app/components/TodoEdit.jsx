var React = require('react');

var TodoEdit = React.createClass({
  componentDidMount: function() {
    this.refs.todoText.value = this.props.todoToEdit.text;
  },
  updateTodo: function(e) {
    e.preventDefault();
    var newTodo = this.props.todoToEdit;
    newTodo.text = this.refs.todoText.value;
    this.props.updateTodo(newTodo);
  },
  render: function() {
    return (
      <div className="modal">
        <form>
          <input type="text" ref="todoText" placeholder="What do you need to do?" onchange={this.updateTodo}/>
          <button onClick={this.updateTodo} className="button expanded">Edit Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoEdit;

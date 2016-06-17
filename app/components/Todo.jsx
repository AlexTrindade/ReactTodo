var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

var Todo = React.createClass({
  editTodo: function() {
    this.props.onEdit(this.props.id);
  },
  deleteTodo: function() {
    this.props.onDelete(this.props.id);
  },
  render: function() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }
      return message + moment.unix(timeStamp).format('DD/MM/YYYY @ h:mm');
    }

    return (
      <div className="todoContainer">
        <div className={todoClassName} onClick={() => {
            dispatch(actions.toggleTodo(id));
          }}>
          <div>
            <input type="checkbox" checked={completed} />
          </div>
          <div>
            <p>{text}</p>
            <p>{renderDate()}</p>
          </div>
        </div>
        <div className="editDeleteBox">
          <button className="editDelete" onClick={this.editTodo}>Edit</button>
          <span className="editDelete">&nbsp;/&nbsp;</span>
          <button className="editDelete" onClick={this.deleteTodo}>Delete</button>
        </div>
      </div>

    )

  }
});

module.exports = connect()(Todo);

var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return <li>{id}. {text}</li>
  }
});

module.exports = Todo;

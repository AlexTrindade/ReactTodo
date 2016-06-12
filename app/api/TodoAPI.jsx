var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  },
  deleteTodo: function(todos, id) {
    var updatedTodos = todos;
    updatedTodos = updatedTodos.filter((todo) => {
      return todo.id !== id;
    })
    return updatedTodos;
  },
  editTodo: function(todos, id) {
    var todoToEdit = todos.find((todo) => {
      return todo.id === id
    });
    return todoToEdit;
  }
}

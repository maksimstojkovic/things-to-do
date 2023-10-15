import { Todo } from './todo';

const Project = (title) => {
  // Props
  const todos = [];

  //Getters
  const getTitle = () => title;
  const getTodos = () => todos;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);

  // Todo operations
  const createTodo = (title, description, dueDate, priority, note) => {
    todos.push(Todo(title, description, dueDate, priority, note));
  };

  const moveTodoPrev = (index) => {
    if (index > 0) {
      [todos[index - 1], todos[index]] = [todos[index], todos[index - 1]];
    }
  };

  const moveTodoNext = (index) => {
    if (index < todos.length - 1) {
      [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
    }
  };

  const deleteTodo = (index) => {
    return todos.splice(index, 1);
  };

  return {
    getTitle,
    getTodos,
    setTitle,

    createTodo,
    moveTodoPrev,
    moveTodoNext,
  };
};

export { Project };

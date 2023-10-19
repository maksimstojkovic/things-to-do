const Todo = (title) => {
  const getTitle = () => title;

  return { getTitle };
};

const Project = (title) => {
  const todos = [];

  const getTitle = () => title;
  const getTodos = () => todos;

  const createTodo = (title) => {
    todos.append(Todo(title));
  };

  const deleteTodo = (index) => {
    return todos.splice(index, 1);
  };

  return { getTitle, getTodos, createTodo, deleteTodo };
};

export { Project };

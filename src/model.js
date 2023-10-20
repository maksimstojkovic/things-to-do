const Todo = (title) => {
  const getTitle = () => title;

  const setTitle = (newTitle) => (title = newTitle);

  return { getTitle, setTitle };
};

const Project = (title) => {
  const todos = [];

  const getTitle = () => title;
  const getTodos = () => todos;

  const setTitle = (newTitle) => (title = newTitle);

  const createTodo = (title) => {
    todos.push(Todo(title));
  };

  const deleteTodo = (index) => {
    return todos.splice(index, 1);
  };

  return { getTitle, getTodos, setTitle, createTodo, deleteTodo };
};

export { Project };

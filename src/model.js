const Todo = (title) => {
  const getTitle = () => title;

  return { getTitle };
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

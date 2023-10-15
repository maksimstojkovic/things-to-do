const Checklist = () => {
  const tasks = [];

  const createTask = (taskDescription) => {
    tasks.push({ description: taskDescription, completed: false });
  };

  const getTasks = () => tasks;
  const getTaskCompleted = (index) => tasks[index].completed;

  const setTaskCompleted = (index, state) => {
    tasks[index].completed = state;
  };

  const toggleTaskCompleted = (index) => {
    setTaskCompleted(index, !getTaskCompleted(index));
  };

  const deleteTask = (index) => tasks.splice(index, 1);

  return { createTask, getTasks, toggleTaskCompleted, deleteTask };
};

export { Checklist };

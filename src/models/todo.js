import { Checklist } from './checklist';

const Todo = (title, description, dueDate, priority, note) => {
  // Props
  const checklist = Checklist();

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNote = () => note;
  const getChecklist = () => checklist;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newFescription) => (description = newFescription);
  const setDueDate = (newFueDate) => (dueDate = newFueDate);
  const setPriority = (newPriority) => (priority = newPriority);
  const setNote = (newNote) => (note = newNote);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNote,
    getChecklist,

    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setNote,
  };
};

export { Todo };

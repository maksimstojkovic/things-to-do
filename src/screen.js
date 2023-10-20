import { appendChild, prependChild } from './helper';

const Screen = (app) => {
  const renderLayout = () => {
    // Create navbar, sidebar and content divs
    const body = document.querySelector('body');
    const container = prependChild(body, 'div', 'page-container');

    const navbar = appendChild(container, 'div', 'navbar');
    const sidebar = appendChild(container, 'div', 'sidebar crud-layout');
    const content = appendChild(container, 'div', 'content crud-layout');

    // Create headers in each section
    appendChild(navbar, 'h2', 'section-header').textContent = 'Things To Do';
    appendChild(sidebar, 'h2', 'section-header').textContent = 'Projects';
    appendChild(content, 'h2', 'section-header').textContent = 'Todos';

    // Create buttons in project and todo sections
    const addProjectButton = appendChild(sidebar, 'button', 'add-project');
    addProjectButton.textContent = 'New Project';
    addProjectButton.addEventListener('click', () => {
      app.createProject('test');
      renderProjects();
    });

    const addTodoButton = appendChild(content, 'button', 'add-todo');
    addTodoButton.textContent = 'New Todo';

    // Create div for cards in project and todo sections
    appendChild(sidebar, 'div', 'projects cards');
    appendChild(content, 'div', 'tasks cards');
  };

  const renderProjects = () => {
    const projectsDiv = document.querySelector('.projects');
    projectsDiv.replaceChildren();

    app.getProjects().forEach((project, index) => {
      const card = appendChild(projectsDiv, 'div', 'card');

      const title = appendChild(card, 'p', 'title');
      title.textContent = project.getTitle();
      title.addEventListener('click', () => {
        app.activateProject(index);
        renderTodos();
      });

      const editButton = appendChild(card, 'button');
      editButton.textContent = 'Edit';

      editButton.addEventListener(
        'click',
        () => {
          editTextEventHandler(project, title, editButton);
        },
        { once: true }
      );

      const deleteButton = appendChild(card, 'button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        app.deleteProject(index);
        card.remove();
      });
    });
  };

  const renderTodos = () => {};

  // Event handlers
  const editTextEventHandler = (object, title, editButton) => {
    const input = document.createElement('input');
    input.value = object.getTitle();

    title.classList.add('hide');
    title.insertAdjacentElement('afterend', input);

    editButton.textContent = 'Save';

    editButton.addEventListener(
      'click',
      () => {
        saveTextEventHandler(object, title, input, editButton);
      },
      { once: true }
    );
  };

  const saveTextEventHandler = (object, title, input, editButton) => {
    object.setTitle(input.value);
    title.textContent = object.getTitle();

    input.remove();
    title.classList.remove('hide');
    editButton.textContent = 'Edit';

    editButton.addEventListener(
      'click',
      () => {
        editTextEventHandler(object, title, editButton);
      },
      { once: true }
    );
  };

  return { renderLayout, renderProjects, renderTodos };
};

export { Screen };

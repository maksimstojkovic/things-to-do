import { appendChild, prependChild } from './helper';

const Screen = (app) => {
  const render_layout = () => {
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
      console.log(app.getProjects().map((e) => e.getTitle()));
    });

    const addTodoButton = appendChild(content, 'button', 'add-todo');
    addTodoButton.textContent = 'New Todo';

    // Create div for cards in project and todo sections
    appendChild(sidebar, 'div', 'cards');
    appendChild(content, 'div', 'cards');
  };

  return { render_layout };
};

export { Screen };

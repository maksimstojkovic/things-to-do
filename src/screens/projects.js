import { appendChild } from '../util/helper';
import { Navbar } from './navbar';
import { ProjectScreen } from './project';

// Screen for all projects
const ProjectsScreen = (() => {
  const render = (app) => {
    // Navbar
    Navbar.setTitle('Projects');
    Navbar.hideBackButton();

    // Content
    const contentDiv = document.querySelector('.content');
    contentDiv.replaceChildren();

    const projectsDiv = appendChild(contentDiv, 'div', 'projects');

    app.getProjects().forEach((project) => {
      const projectDiv = appendChild(projectsDiv, 'div', 'project card');

      const leftDiv = appendChild(projectDiv, 'div', 'left');
      const rightDiv = appendChild(projectDiv, 'div', 'right');

      // Left half of card
      const titleDiv = appendChild(leftDiv, 'div', 'title');
      titleDiv.textContent = project.getTitle();

      const todoCountDiv = appendChild(leftDiv, 'div', 'todo-count');
      const countValueDiv = appendChild(todoCountDiv, 'div', 'value');
      countValueDiv.textContent = project.getTodos().length;

      const countUomDiv = appendChild(todoCountDiv, 'div', 'uom');
      countUomDiv.textContent =
        project.getTodos().length !== 1 ? 'todos' : 'todo';

      // Right half of card
      const buttonsDiv = appendChild(rightDiv, 'div', 'buttons');
      const deleteButton = appendChild(buttonsDiv, 'button', 'delete');
      deleteButton.textContent = 'Delete';

      // Event listeners
      leftDiv.addEventListener('click', () =>
        ProjectScreen.render(app, project)
      );
    });
  };

  return { render };
})();

export { ProjectsScreen };

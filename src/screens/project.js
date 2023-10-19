import { appendChild } from '../util/helper';
import { Navbar } from './navbar';
import { ProjectsScreen } from './projects';

// Screen for single project
const ProjectScreen = (() => {
  const render = (app, project) => {
    // Navbar
    Navbar.setTitle(project.getTitle());
    Navbar.showBackButton(() => {
      ProjectsScreen.render(app);
    });

    // Content
    const contentDiv = document.querySelector('.content');
    contentDiv.replaceChildren();
  };

  return { render };
})();

export { ProjectScreen };

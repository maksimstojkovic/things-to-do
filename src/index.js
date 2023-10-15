import './style.scss';
import { Project } from './models/project';
import { BaseScreen } from './screens/base';

const App = (() => {
  const projects = [];

  // Getters
  const getProjects = () => projects;

  // Projects
  const createProject = (title) => {
    projects.push(Project(title));
  };

  const deleteProject = (index) => projects.splice(index, 1);

  return { getProjects, createProject, deleteProject };
})();

BaseScreen.render();
App.createProject();

// TODO: Remove in production
window.app = App;

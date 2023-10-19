import './style.scss';
import { Project } from './model';
import { Screen } from './screen';

const App = (() => {
  let screen = null;
  const projects = [];

  const getScreen = () => screen;
  const getProjects = () => projects;

  const createProject = (title) => {
    projects.push(Project(title));
  };

  const deleteProject = (index) => {
    return projects.splice(index, 1);
  };

  const init = (app) => {
    screen = Screen(app);
  };

  return { getScreen, getProjects, createProject, deleteProject, init };
})();

App.init(App);
App.getScreen().render_layout();

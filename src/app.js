import './style.scss';
import { Project } from './model';
import { Screen } from './screen';

const App = (() => {
  let screen = null;
  const projects = [];
  let activeProject = null;

  const getScreen = () => screen;
  const getProjects = () => projects;

  const createProject = (title) => {
    projects.push(Project(title));
  };

  const deleteProject = (index) => {
    const removedProject = projects.splice(index, 1);

    if (projects.length === 0) {
      activeProject = null;
    } else if (index <= activeProject) {
      activeProject--;
    }

    return removedProject;
  };

  const activateProject = (index) => {
    activeProject = index;
  };

  const init = (app) => {
    screen = Screen(app);
  };

  return {
    getScreen,
    getProjects,
    createProject,
    deleteProject,
    activateProject,
    init,
  };
})();

App.init(App);
App.getScreen().renderLayout();

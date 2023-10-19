import './style.scss';
import { Project } from './model';
import { Screen } from './screen';

const App = (() => {
  const screen = Screen;
  const projects = [];

  const getScreen = () => screen;
  const getProjects = () => projects;

  const createProject = (title) => {
    projects.append(Project(title));
  };

  const deleteProject = (index) => {
    return projects.splice(index, 1);
  };

  return { getScreen, getProjects, createProject, deleteProject };
})();

App.getScreen().render_layout();

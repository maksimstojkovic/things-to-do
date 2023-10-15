import './style.scss';
import { Project } from './models/project';
import { BaseScreen } from './screens/base';
import { ProjectsScreen } from './screens/projects';

const App = (() => {
  const projects = [];
  const homeScreen = ProjectsScreen;

  // Getters
  const getProjects = () => projects;
  const getHomeScreen = () => homeScreen;

  // Projects
  const createProject = (title) => {
    projects.push(Project(title));
  };

  const deleteProject = (index) => projects.splice(index, 1);

  // Screens

  return { getProjects, createProject, deleteProject, getHomeScreen };
})();

App.createProject('Test Project');
App.createProject('Test Project 2');

BaseScreen.render(App);
App.getHomeScreen().render(App);

// TODO: Remove in production
window.app = App;

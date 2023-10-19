import './style.scss';
import { Project } from './model';

const App = (() => {
  const projects = [];

  const getProjects = () => projects;

  const createProject = (title) => {
    projects.append(Project(title));
  };

  const deleteProject = (index) => {
    return projects.splice(index, 1);
  };

  return { getProjects, createProject, deleteProject };
})();

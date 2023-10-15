import { appendChild } from '../util/helper';

// Screen for all projects
const Navbar = (() => {
  let initialised = false;
  let app = null;

  const render = (app, parent) => {
    if (initialised) {
      console.log('navbar already initialised');
      return;
    }

    const navbarDiv = appendChild(parent, 'div', 'navbar');
    appendChild(navbarDiv, 'div', 'back-btn');
    appendChild(navbarDiv, 'div', 'title');

    const siteNameDiv = appendChild(navbarDiv, 'div', 'site-name');
    siteNameDiv.textContent = 'Things To Do';

    // Event listeners
    siteNameDiv.addEventListener('click', () => {
      app.getHomeScreen().render(app);
    });

    initialised = true;
  };

  const setTitle = (title) => {
    const siteNameDiv = document.querySelector('.title');
    siteNameDiv.textContent = title;
  };

  const showBackButton = (app, screen) => {
    const backButtonDiv = document.querySelector('.back-btn');
    backButtonDiv.classList.add('visible');

    backButtonDiv.addEventListener('click', screen.render(app));
  };

  const hideBackButton = () => {
    const backButtonDiv = document.querySelector('.back-btn');
    backButtonDiv.classList.remove('visible');
  };

  return { render, setTitle, showBackButton, hideBackButton };
})();

export { Navbar };

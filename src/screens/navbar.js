import { appendChild } from '../util/helper';

// Screen for all projects
const Navbar = (() => {
  let initialised = false;

  const render = (app, parent) => {
    if (initialised) {
      console.log('Navbar already initialised');
      return;
    }

    const navbarDiv = appendChild(parent, 'div', 'navbar');
    const backButtonDiv = appendChild(navbarDiv, 'div', 'back-btn');
    backButtonDiv.textContent = '<';
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

  const showBackButton = (callback) => {
    const backButtonDiv = document.querySelector('.back-btn');
    backButtonDiv.classList.remove('hide');

    backButtonDiv.addEventListener('click', callback);
  };

  const hideBackButton = () => {
    const backButtonDiv = document.querySelector('.back-btn');
    backButtonDiv.classList.add('hide');
  };

  return { render, setTitle, showBackButton, hideBackButton };
})();

export { Navbar };

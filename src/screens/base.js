import { appendChild, prependChild } from '../util/helper';

const BaseScreen = (() => {
  const render = () => {
    const containerDiv = prependChild(
      document.querySelector('body'),
      'div',
      'container'
    );

    // Navbar
    const navbarDiv = appendChild(containerDiv, 'div', 'navbar');
    appendChild(navbarDiv, 'div', 'back-btn');
    appendChild(navbarDiv, 'div', 'title');
    const siteNameDiv = appendChild(navbarDiv, 'div', 'site-name');
    siteNameDiv.textContent = 'Things To Do';

    // Content
    appendChild(containerDiv, 'div', 'content');
  };

  return { render };
})();

export { BaseScreen };

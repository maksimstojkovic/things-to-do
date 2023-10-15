import { appendChild, prependChild } from '../util/helper';
import { Navbar } from './navbar';

const BaseScreen = (() => {
  const render = (app) => {
    const containerDiv = prependChild(
      document.querySelector('body'),
      'div',
      'container'
    );

    // Navbar
    Navbar.render(app, containerDiv);

    // Content
    appendChild(containerDiv, 'div', 'content');
  };

  return { render };
})();

export { BaseScreen };

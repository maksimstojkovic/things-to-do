import { appendChild, prependChild } from '../util/helper';

const BaseScreen = (() => {
  const render = () => {
    const containerDiv = prependChild(
      document.querySelector('body'),
      'div',
      'container'
    );

    appendChild(containerDiv, 'div', 'navbar');
    appendChild(containerDiv, 'div', 'content');
  };

  return { render };
})();

export { BaseScreen };

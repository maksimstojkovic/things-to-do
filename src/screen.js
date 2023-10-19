import { appendChild, prependChild } from './helper';

const Screen = ((app) => {
  const render_layout = () => {
    // Create navbar, sidebar and content divs
    const body = document.querySelector('body');
    const container = prependChild(body, 'div', 'page-container');

    const navbar = appendChild(container, 'div', 'navbar');
    const sidebar = appendChild(container, 'div', 'sidebar');
    const content = appendChild(container, 'div', 'content');

    // Create headers in each section
    appendChild(navbar, 'h2', 'section-header').textContent = 'Things To Do';
    appendChild(sidebar, 'h2', 'section-header').textContent = 'Projects';
    appendChild(content, 'h2', 'section-header').textContent = 'Todos';
  };

  return { render_layout };
})();

export { Screen };

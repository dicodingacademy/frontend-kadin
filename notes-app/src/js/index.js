// Import our custom CSS
import '../scss/main.scss';

// Import all of our dependencies
import swRegister from './utils/sw-register';
import App from './views/app';
import * as bootstrap from 'bootstrap';

const app = new App({
  content: document.getElementById('mainContent'),
  navListContainer: document.getElementById('navListContainer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  await swRegister();
});

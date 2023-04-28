// Import our custom CSS
import '../scss/main.scss';

import App from './views/app';
import * as bootstrap from 'bootstrap';
// import swRegister from './utils/sw-register';

const app = new App({
  content: document.getElementById('mainContent'),
  navListContainer: document.getElementById('navListContainer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  // await swRegister();
});

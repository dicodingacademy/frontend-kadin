import Dashboard from './views/pages/dashboard';
import CreateNote from './views/pages/notes/create';
import LoginPage from './views/pages/auth/login';
import RegisterPage from './views/pages/auth/register';

const routes = {
  '/': Dashboard, // default page
  '/dashboard': Dashboard, // default page
  '/note/create': CreateNote,

  // Auth
  '/login': LoginPage,
  '/register': RegisterPage,
};

export default routes;

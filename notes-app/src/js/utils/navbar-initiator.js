import AuthApi from '../networks/auth-api';
import {
  authenticatedNavListTemplate,
  unauthenticatedNavListTemplate,
} from '../views/templates/template-creator';

const NavbarInitiator = {
  async renderAuthenticatedNavList(navListContainers) {
    try {
      const response = await AuthApi.getUserInfo();

      navListContainers.forEach((el) => {
        el.innerHTML = authenticatedNavListTemplate(response.data);
      });
      this._initialUnauthListener();
    } catch (error) {
      console.log(error);
    }
  },

  _initialUnauthListener() {
    const logoutButton = document.getElementById('userLogOut');
    logoutButton.addEventListener('click', async (event) => {
      event.preventDefault();

      try {
        const response = await AuthApi.logout();
        window.location.hash = '#/login';
      } catch (error) {
        console.error(error);
      }
    });
  },

  renderUnauthenticatedNavList(navListContainers) {
    navListContainers.forEach((el) => {
      el.innerHTML = unauthenticatedNavListTemplate();
    });
  },
};

export default NavbarInitiator;

import {
  authenticatedNavListTemplate,
  unauthenticatedNavListTemplate,
} from '../views/templates/template-creator';

const NavbarInitiator = {
  renderAuthenticatedNavList(navListContainer) {
    navListContainer.innerHTML = authenticatedNavListTemplate();
    this._initialUnauthListener();
  },

  _initialUnauthListener() {
    const logoutButton = document.getElementById('userLogOut');
    logoutButton.addEventListener('click', async (event) => {
      event.preventDefault();

      try {
        await AuthApi.logout();
        window.location.hash = '#/login';
      } catch (error) {
        console.error(error);
      }
    });
  },

  renderUnauthenticatedNavList(navListContainer) {
    navListContainer.innerHTML = unauthenticatedNavListTemplate();
  },
};

export default NavbarInitiator;

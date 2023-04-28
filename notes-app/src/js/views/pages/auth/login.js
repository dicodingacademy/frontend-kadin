import AuthApi from '../../../networks/auth-api';

const Login = {
  async render() {
    return `
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">Login</h1>

            <form id="loginForm">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
              </div>

              <div class="mb-3 text-end">
                <button class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    console.log('login page');

    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      try {
        const loginForm = this._getLoginForm();
        await AuthApi.login(loginForm);

        window.location.hash = '#/dashboard';
      } catch (error) {
        console.error(error);
      }
    });
  },

  _getLoginForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    return {
      email: email.value,
      password: password.value,
    };
  },
};

export default Login;

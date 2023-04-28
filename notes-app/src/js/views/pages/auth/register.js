import AuthApi from '../../../networks/auth-api';

const Register = {
  async render() {
    return `
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">Register</h1>

            <form id="registerForm">
              <div class="mb-3">
                <label for="name" class="form-label">Nama</label>
                <input type="text" class="form-control" id="name">
              </div>
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
    console.log('register page');

    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      try {
        const registerForm = this._getRegisterForm();
        await AuthApi.register(registerForm);

        window.location.hash = '#/dashboard';
      } catch (error) {
        console.error(error);
      }
    });
  },

  _getRegisterForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },
};

export default Register;

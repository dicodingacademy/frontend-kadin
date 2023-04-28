import API_ENDPOINT from '../globals/api-endpoint';

class AuthApi {
  static async register({ name, email, password }) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    return await response.json();
  }

  static async login({ email, password }) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  }

  static setUserToken(key, value) {
    return sessionStorage.setItem(key, value);
  }
  static getUserToken(key) {
    return sessionStorage.getItem(key);
  }
  static destroyUserToken(key) {
    return sessionStorage.removeItem(key);
  }
}

export default AuthApi;

import API_ENDPOINT from '../globals/api-endpoint';

class NotesApi {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.GET_ALL_NOTES);
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(API_ENDPOINT.GET_NOTE_BY_ID(id));
    return await response.json();
  }

  static async store({ title, body }) {
    console.log(API_ENDPOINT.STORE_NOTE);

    // const response = await fetch(API_ENDPOINT.STORE_NOTE, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ title, body }),
    // });

    // return await response.json();

    return {
      message: 'Success to proceed',
      data: {
        note: { title, body },
      },
    };
  }

  static async update(id, { title, body }) {
    console.log(API_ENDPOINT.UPDATE_NOTE(id));

    // const response = await fetch(API_ENDPOINT.UPDATE_NOTE(id), {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ title, body }),
    // });

    // return await response.json();

    return {
      message: 'Success to proceed',
      data: {
        note: { title, body },
      },
    };
  }

  static async destroy(id) {
    console.log(API_ENDPOINT.DELETE_NOTE(id));

    const response = await fetch(API_ENDPOINT.DELETE_NOTE(id), {
      // method: 'DELETE',
    });
    return await response.json();
  }
}

export default NotesApi;

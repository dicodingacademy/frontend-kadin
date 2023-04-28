const API_ENDPOINT = {
  REGISTER: `/register`,
  LOGIN: `/login`,

  GET_ALL_NOTES: `/data/all.json`,
  GET_NOTE_BY_ID: (id) => `/data/detail-note/${id}.json`,
  STORE_NOTE: `store`,
  UPDATE_NOTE: (id) => `update/${id}`,
  DELETE_NOTE: (id) => `/data/deleted-note.json`,
};

export default API_ENDPOINT;

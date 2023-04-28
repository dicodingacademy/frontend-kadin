import { convertToFormattedDate } from '../../utils/utils';

const unauthenticatedNavListTemplate = (navList) => `
  <ul class="navbar-nav">
    <li id="loginMenu" class="nav-item">
      <a class="nav-link" href="#/login">Login</a>
    </li>
    <li id="registerMenu" class="nav-item">
      <a class="nav-link" href="#/register">Register</a>
    </li>
  </ul>
`;

const authenticatedNavListTemplate = (navList) => `
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#/">Beranda</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#/note/create">Tambah</a>
    </li>
    <li id="userLoggedMenu" class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle text-nowrap"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div class="me-2 d-inline-block">
          <img
            id="imgUserLogged"
            style="width: 30px;height: 30px"
            class="img-fluid rounded-pill"
            src="https://ui-avatars.com/api/?name=User%20Name&background=random"
            alt="User Name"
          />
        </div>
        <span id="nameUserLogged">User</span>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <a id="userLogOut" class="dropdown-item" href="#/logout">Logout</a>
      </ul>
    </li>

  </ul>
`;

const noteItemTemplate = (note) => `
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">${note.title}</h5>
      <span class="text-muted">${convertToFormattedDate(note.createdAt)}</span>
      <p class="card-text">${note.body}</p>
      <div class="mt-3 d-flex gap-2 justify-content-end align-items-end">
        <a href="#/note/edit/${note.id}" class="btn btn-warning">Edit</a>
        <button 
          id="deleteNoteButton" 
          data-id="${note.id}" 
          class="btn btn-danger"
        >Hapus</button>
      </div>
    </div>
  </div>
`;

const noteDetailTemplate = (note) => `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${note.title}</h5>
      <p class="card-text">${note.body}</p>
      <span class="text-muted">${convertToFormattedDate(note.createdAt)}</span>
    </div>
  </div>
`;

export {
  noteItemTemplate,
  noteDetailTemplate,
  authenticatedNavListTemplate,
  unauthenticatedNavListTemplate,
};

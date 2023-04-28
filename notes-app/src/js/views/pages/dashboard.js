import NotesApi from '../../networks/notes-api';
import { noteItemTemplate } from '../templates/template-creator';

const Dashboard = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Dasbor</h2>

        <div id="notesList" class="row gy-4"></div>
      </div>
    `;
  },

  async afterRender() {
    const notes = await NotesApi.getAll();
    const notesListEl = document.getElementById('notesList');

    notesListEl.innerHTML = '';
    notes.data.listNotes.forEach((note) => {
      notesListEl.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          ${noteItemTemplate(note)}
        </div>
      `;
    });

    document.querySelectorAll(`#deleteNoteButton`).forEach((el) => {
      el.addEventListener('click', async (event) => {
        const noteId = event.target.dataset.id;
        await NotesApi.destroy(noteId);
      });
    });
  },
};

export default Dashboard;

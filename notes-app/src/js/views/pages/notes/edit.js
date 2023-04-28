import NotesApi from '../../../networks/notes-api';
import UrlParser from '../../../utils/url-parser';

const Edit = {
  async render() {
    return `
      <div class="content">
        <h1>Edit Note</h1>
        
        <div class="row justify-content-start">
          <div class="col-12 col-sm-10 col-md-8 col-xl-6">

            <form id="editNoteForm">
              <div class="mb-3">
                <label for="titleNote" class="form-label">Judul</label>
                <input type="text" class="form-control" id="titleNote">
              </div>
              <div class="mb-3">
                <label for="bodyNote" class="form-label">Catatan</label>
                <textarea class="form-control" id="bodyNote" rows="3"></textarea>
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
    console.log('edit');

    await this._initialFetch();
    this._initialListener();
  },

  async _initialFetch() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const note = await NotesApi.getById(url.id);

    this._populateNoteToForm(note.data.note);
  },

  _initialListener() {
    const editNoteForm = document.getElementById('editNoteForm');
    editNoteForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      try {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const note = this._getNoteFromForm();
        await NotesApi.update(url.id, note);

        window.location.hash = '#/dashboard';
      } catch (error) {
        console.error(error);
      }
    });
  },

  _populateNoteToForm(note) {
    const titleNote = document.getElementById('titleNote');
    const bodyNote = document.getElementById('bodyNote');

    titleNote.value = note.title;
    bodyNote.value = note.body;
  },

  _getNoteFromForm() {
    const titleNote = document.getElementById('titleNote');
    const bodyNote = document.getElementById('bodyNote');

    return {
      title: titleNote.value,
      body: bodyNote.value,
    };
  },
};

export default Edit;

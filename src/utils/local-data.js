// Utility functions for local data management

const STORAGE_KEY = 'NOTES_APP_DATA';

export function getNotes() {
  const notes = localStorage.getItem(STORAGE_KEY);
  return notes ? JSON.parse(notes) : [];
}

export function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function addNote(note) {
  const notes = getNotes();
  notes.push(note);
  saveNotes(notes);
}

export function deleteNote(id) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNotes(notes);
}

export function updateNote(updatedNote) {
  const notes = getNotes().map((note) =>
    note.id === updatedNote.id ? updatedNote : note
  );
  saveNotes(notes);
}

export function archiveNote(id) {
  const notes = getNotes().map((note) =>
    note.id === id ? { ...note, archived: true } : note
  );
  saveNotes(notes);
}

export function unarchiveNote(id) {
  const notes = getNotes().map((note) =>
    note.id === id ? { ...note, archived: false } : note
  );
  saveNotes(notes);
} 
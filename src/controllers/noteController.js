import * as noteRepo from "@/repositories/NoteRepository";

export async function getAllNotes() {
  return await noteRepo.getAllNotes();
}

export async function getNoteById(noteId) {
  return await noteRepo.getNoteById(noteId);
}

export async function getNoteByStatus(status) {
  return await noteRepo.getNoteByStatus(status);
}

export async function addNote(noteData) {
  return await noteRepo.addNote(noteData);
}

export async function updateNote(noteId, noteData) {
  return await noteRepo.updateNote(noteId, noteData);
}

export async function deleteNote(noteId) {
  return await noteRepo.deleteNote(noteId);
}

import Note from "@/models/Note";

export async function getAllNotes() {
  return await Note.find({}).lean();
}

export async function getNoteById(noteId) {
  return await Note.findById(noteId).lean();
}

export async function getNoteByStatus(status) {
  return await Note.find({ status: status }).lean();
}

export async function addNote(noteData) {
  return await Note.create(noteData);
}

export async function updateNote(noteId, noteData) {
  return await Note.findByIdAndUpdate(noteId, noteData, {
    new: true,
  }).lean();
}

export async function deleteNote(noteId) {
  const deleted = await Note.findByIdAndDelete(noteId);
  if (!deleted) {
    throw new Error("Note not found");
  }
  return deleted;
}

"use client";

import React, { useEffect, useState } from "react";
import {
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} from "@/repositories/NoteRepository";

export default function NoteForm({
  noteId,
  action,
  bgColor,
  setBgColor,
  setAction,
  setNoteId,
  setFormOpen,
  onNotesUpdated,
}) {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
  });
  const [result, setResult] = useState({
    status: "View",
    message: "On progress...",
  });
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (noteId !== "") {
      getNoteData(noteId);
    }
  }, [noteId]);

  function handleChange(e) {
    setResult({ status: "", message: "Loading..." });
    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value,
    });
  }

  async function getNoteData(noteId) {
    const note = await getNoteById(noteId);
    if (note) setNoteData(note);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (action === "create") {
      try {
        const res = await createNote(noteData);
        setResult({
          status: "success",
          message: "Add new note successful!",
        });
        onNotesUpdated();
        closeForm();
      } catch (error) {
        setResult({
          status: "failed",
          message: "Add new note failed!",
        });
        console.error(
          "Add new note failed! Error: ",
          error
        );
      }
    } else if (action === "update") {
      try {
        await updateNote(noteId, noteData);
        setResult({
          status: "success",
          message: `Update note #${noteId} successful!`,
        });
        onNotesUpdated();
        setAction("update");
      } catch (error) {
        setResult({
          status: "failed",
          message: `Update note #${noteId} failed!`,
        });
        console.error(
          `Update note #${noteId} failed! Error: `,
          error
        );
      }
    }
  }

  async function handleDelete() {
    try {
      await deleteNote(noteId);
      onNotesUpdated();
      closeForm();
    } catch {
      setResult({
        status: "failed",
        message: "Delete note failed!",
      });
    }
  }

  function closeForm() {
    setResult({ status: "View", message: "" });
    setConfirmOpen(false);
    setFormOpen(false);
    setNoteId("");
    setNoteData({ title: "", content: "" });
    setBgColor("");
  }

  return (
    <div
      className={`outline-[var(--border)] outline-1 
        relative rounded-l-xl p-3 h-fit w-full
      bg-[var(--form-bg)] shadow-[var(--form-shadow)]`}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex items-center px-2 py-1">
          <div>
            <h3
              className="font-[federo]
        flex items-center text-[25px] text-[var(--form-fg)]"
            >
              {action === "create" && `New note`}
              {action === "update" && `Note #${noteId}`}
            </h3>

            <p
              className={`font-[federo]
                transition-all duration-300 ease-in-out
              ${
                result.status === "success"
                  ? `text-green-600 text-[20px] opacity-100`
                  : result.status === "failed"
                  ? `text-red-600 text-[20px] opacity-100`
                  : `text-black text-[0px] opacity-0`
              }`}
            >
              {result.message}
            </p>
          </div>

          <button
            type="button"
            className="ms-auto mb-auto
          flex items-center justify-center font-[federo]
          cursor-pointer px-2 py-1 rounded-md 
          border-[var(--border)] border-1
          bg-transparent text-[var(--form-fg)]
          hover:bg-[var(--form-fg)] hover:text-[var(--form-bg)]
          active:bg-[var(--form-fg)] active:text-[var(--form-bg)]
          gap-2 transition-all duration-300 ease-in-out"
            onClick={closeForm}
          >
            Close
            <i
              className="bi bi-x-lg
            flex items-center 
            text-[25px]"
            ></i>
          </button>
        </div>

        <div className="flex flex-col justify-center p-2 pb-0 gap-3">
          <input
            type="text"
            className="bg-[var(--form-ip-bg)] text-[var(--form-fg)]
          p-2 rounded-lg transition-all duration-300 ease-in-out
          outline-none focus:bg-[var(--form-ip-focus)] w-full 
          border-[var(--border)] border-1"
            name="title"
            onChange={handleChange}
            value={noteData.title}
            placeholder="Title"
          />
          <textarea
            className="resize-none p-2 rounded-lg 
            bg-[var(--form-ip-bg)] text-[var(--form-fg)]
            transition-all duration-300 ease-in-out
            outline-none focus:bg-[var(--form-ip-focus)] w-full 
            border-[var(--border)] border-1"
            cols="30"
            rows="5"
            name="content"
            onChange={handleChange}
            value={noteData.content}
            placeholder="Content"
          ></textarea>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out 
            overflow-hidden flex gap-2 ${
              !isConfirmOpen
                ? "max-h-96 px-2 py-2 w-full"
                : "max-h-0 p-0 w-full"
            }`}
        >
          <button
            type="submit"
            className="w-full rounded-lg cursor-pointer
        bg-green-400 hover:bg-green-500 active:bg-green-500 
        p-1 transition-all duration-300 ease-in-out gap-1 
        border-1 border-[var(--border)]
        flex justify-center items-center font-[federo]
        disabled:bg-[var(--form-btn-dis-bg)] disabled:line-through
        disabled:text-[var(--form-fg)]"
            disabled={
              noteData.title === "" || result.status !== ""
            }
          >
            Save <i className="bi bi-check2-square"></i>
          </button>
          {action === "update" && (
            <button
              type="button"
              className="w-full rounded-lg cursor-pointer gap-1
        bg-red-500 hover:bg-red-700 active:bg-red-700
        text-white p-1 transition-all duration-300 
        ease-in-out flex justify-center items-center 
        font-[federo] border-black border-1
        disabled:bg-red-900 disabled:line-through"
              disabled={Object.keys(noteData).length === 0}
              onClick={() => {
                setConfirmOpen(true);
                setResult({
                  status: "",
                  message: "Loading...",
                });
              }}
            >
              Delete <i className="bi bi-trash"></i>
            </button>
          )}
        </div>

        <div
          className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden gap-2 ${
            isConfirmOpen
              ? "max-h-96 px-2 py-2 w-full"
              : "max-h-0 p-0 w-full"
          }`}
        >
          <p
            className="col-span-2 text-center text-[25px]
          flex items-center justify-center font-[federo]
          text-[var(--form-fg)]"
          >
            {`Delete note ${noteData.title}?`}
          </p>
          <button
            type="button"
            className="w-full rounded-lg cursor-pointer gap-1
        bg-red-500 hover:bg-red-700 active:bg-red-700
        text-white p-1 transition-all duration-300 
        ease-in-out flex justify-center items-center 
        font-[federo] border-black border-1
        disabled:bg-red-900 disabled:line-through"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            type="button"
            className="w-full rounded-lg cursor-pointer
        bg-gray-300 hover:bg-gray-500 active:bg-gray-500 
        p-1 transition-all duration-300 ease-in-out gap-1 border-1
        flex justify-center items-center font-[federo]
        disabled:bg-gray-300 disabled:line-through"
            onClick={() => setConfirmOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

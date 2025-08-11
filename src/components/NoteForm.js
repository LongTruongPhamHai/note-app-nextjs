"use client";

import React, { useEffect, useState } from "react";
import axiosClient from "@/utils/axiosClient";

export default function NoteForm({
  noteId,
  action,
  setAction,
  setNoteId,
  setFormOpen,
  onNotesUpdated,
}) {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    status: "progress",
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
    if (!noteId) return;

    try {
      const res = await axiosClient.get(
        `/notes?id=${noteId}`
      );

      if (res) setNoteData(res.data);
    } catch (err) {
      console.error("Fetch note failed! Error: ", err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (action === "create") {
      try {
        const res = await axiosClient.post(
          "/notes",
          noteData
        );
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
        const res = await axiosClient.put(
          `/notes?id=${noteId}`,
          noteData
        );
        setResult({
          status: "success",
          message: `Update note ${noteData.title} successful!`,
        });
        onNotesUpdated();
      } catch (error) {
        setResult({
          status: "failed",
          message: `Update note ${noteData.title} failed!`,
        });
        console.error(
          `Update note ${noteData.title} failed! Error: `,
          error
        );
      }
    }
  }

  async function updateNoteStatus(
    noteId,
    newStatus,
    successMessage
  ) {
    const updatedData = { ...noteData, status: newStatus };
    setNoteData(updatedData);

    try {
      await axiosClient.put(
        `/notes?id=${noteId}`,
        updatedData
      );
      setResult({
        status: "success",
        message: successMessage,
      });
      onNotesUpdated();
      getNoteData(noteId);
    } catch (error) {
      setResult({
        status: "failed",
        message: `Update note ${noteData.title} failed!`,
      });
      console.error(
        `Update note ${noteData.title} failed! Error: `,
        error
      );
    }
  }

  async function handleArchive(noteId) {
    const prevStatus = noteData.status;
    const newStt =
      noteData.status === "archive"
        ? "progress"
        : noteData.status === "trash"
        ? "progress"
        : "archive";
    const newMes =
      prevStatus === "archive"
        ? "Unarchive"
        : prevStatus === "trash"
        ? "Restore"
        : "Archive";

    updateNoteStatus(
      noteId,
      newStt,
      `${newMes} note ${noteData.title} successful!`
    );
  }

  function handleTrash(noteId) {
    updateNoteStatus(
      noteId,
      "trash",
      `Note ${noteData.title} has been moved to trash!`
    );
  }

  async function handleDelete() {
    try {
      await axiosClient.delete(`/notes?id=${noteId}`);
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
    setNoteData({
      title: "",
      content: "",
      status: "progress",
    });
  }

  return (
    <div
      className={`outline-[var(--border)] outline-1 
        relative rounded-l-xl p-3 h-fit w-full
      bg-[var(--form-bg)] shadow-[var(--form-shadow)]`}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex items-center px-2 py-1">
          <div className="w-full overflow-hidden">
            <h3
              className="font-[federo] text-[var(--form-fg)] 
              text-nowrapflex items-center text-[25px] truncate me-2"
            >
              {action === "create" && `New note`}
              {action === "update" &&
                `Note ${noteData.title}`}
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

        <div className="flex flex-col justify-center p-2 pb-0 gap-2">
          <input
            type="text"
            className="bg-[var(--form-ip-bg)] text-[var(--form-fg)]
          p-2 rounded-lg transition-all duration-300 ease-in-out
          outline-none focus:bg-[var(--form-ip-focus)] w-full 
          border-[var(--border)] border-1 placeholder:text-[var(--form-placeholder)]"
            name="title"
            onChange={handleChange}
            value={noteData.title}
            placeholder="Title"
            disabled={noteData.status === "trash"}
          />
          <textarea
            className="bg-[var(--form-ip-bg)] !text-[var(--form-fg)]
            resize-none p-2 rounded-lg transition-all duration-300 ease-in-out
            outline-none focus:bg-[var(--form-ip-focus)] w-full 
            border-[var(--border)] border-1 placeholder:text-[var(--form-placeholder)]"
            cols="30"
            rows="5"
            name="content"
            onChange={handleChange}
            value={noteData.content}
            placeholder="Content"
            disabled={noteData.status === "trash"}
          ></textarea>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out 
            overflow-hidden flex flex-col gap-2 ${
              !isConfirmOpen
                ? "max-h-96 px-2 py-2 w-full"
                : "max-h-0 p-0 w-full"
            }`}
        >
          {noteData.status !== "trash" && (
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
                noteData.title === "" ||
                result.status !== ""
              }
            >
              Save <i className="bi bi-check2-square"></i>
            </button>
          )}

          {action === "update" && (
            <div className="flex gap-2">
              <button
                type="button"
                className="w-full rounded-lg cursor-pointer
        bg-amber-300 hover:bg-amber-400 active:bg-amber-400 
        p-1 transition-all duration-300 ease-in-out gap-1 
        border-1 border-[var(--border)]
        flex justify-center items-center font-[federo]
        disabled:bg-[var(--form-btn-dis-bg)] disabled:line-through
        disabled:text-[var(--form-fg)]"
                onClick={() => handleArchive(noteId)}
              >
                {noteData.status === "progress"
                  ? "Archive"
                  : noteData.status === "archive"
                  ? "Unarchive"
                  : "Restore"}
                <i
                  className={`bi ${
                    noteData.status === "trash"
                      ? "bi-arrow-clockwise"
                      : "bi-archive"
                  }`}
                ></i>
              </button>

              <button
                type="button"
                className="w-full rounded-lg cursor-pointer gap-1
        bg-red-500 hover:bg-red-700 active:bg-red-700
        text-white p-1 transition-all duration-300 
        ease-in-out flex justify-center items-center 
        font-[federo] border-black border-1
        disabled:bg-red-900 disabled:line-through"
                disabled={
                  Object.keys(noteData).length === 0
                }
                onClick={() => {
                  noteData.status === "trash"
                    ? setConfirmOpen(true)
                    : handleTrash(noteId);
                  setResult({
                    status: "view",
                    message: "Loading...",
                  });
                }}
              >
                Delete <i className={`bi bi-trash`}></i>
              </button>
            </div>
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

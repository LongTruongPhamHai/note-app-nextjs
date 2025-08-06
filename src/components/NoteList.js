"use client";

import React from "react";

export default function NoteList({
  notes,
  setFormOpen,
  setNoteId,
  setAction,
}) {
  function toggleForm(id) {
    setNoteId(id);
    setFormOpen(true);
    setAction("update");
  }

  return (
    <div className="w-full h-full">
      {Object.keys(notes).length > 0 ? (
        <div
          className={`
    ${
      notes.length > 1
        ? `w-full
    columns-1 sm:columns-2 lg:columns-3 gap-4`
        : `flex`
    }`}
        >
          {notes.map((item, index) => (
            <div
              className="mb-4 w-full break-inside-avoid 
        bg-white rounded-xl shadow-lg p-2 border-1
        hover:-translate-y-1 hover:bg-[var(--note-content-bg)] 
        active:-translate-y-1 active:bg-[var(--note-content-bg)] 
        transition-all duration-300 group
        cursor-pointer"
              key={index}
              onClick={() => toggleForm(item.id)}
            >
              <div className="note__title flex w-full ps-2 mb-1">
                <h6
                  className="flex items-center 
                font-[federo] font-[500]"
                >
                  {item.title}
                </h6>
                <button
                  className="ms-auto w-[30px] h-[30px]
            bg-transparent hover:bg-black active:bg-black
            text-black hover:text-white active:text-white
            transition-all duration-300 ease-in-out
            rounded-md"
                >
                  <i
                    className="bi bi-chevron-right 
              flex items-center justify-center text-[20px]"
                  ></i>
                </button>
              </div>
              <div
                className="note__content 
            text-base whitespace-pre-line
            bg-[var(--note-content-bg)] p-2 border-1
            transition-all duration-300 ease-in-out
            rounded-md group-hover:bg-white"
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="w-full h-full
        flex items-center justify-center
        font-[federo] text-[30px] text-gray-500"
        >
          No notes yet!
        </div>
      )}
    </div>
  );
}

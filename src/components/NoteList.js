"use client";

import React from "react";

export default function NoteList({
  notes,
  darkMode,
  setFormOpen,
  setNoteId,
  setAction,
  // setBgColor,
}) {
  // const bgColors = [
  //   "bg-red-200 hover:bg-red-100 active:bg-red-100",
  //   "bg-amber-100 hover:bg-amber-100 active:bg-amber-100",
  //   "bg-green-200 hover:bg-green-200 active:bg-green-200",
  //   "bg-sky-300 hover:bg-sky-200 active:bg-sky-200",
  // ];

  function toggleForm(id, index) {
    setNoteId(id);
    setFormOpen(true);
    setAction("update");
    // setBgColor(bgColors[index % 4]);
  }

  return (
    <div className={`w-full h-full ${darkMode && "dark"}`}>
      <div
        className="w-full pb-[70px]
    columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
      >
        {notes.map((item, index) => (
          <div
            key={index}
            className={`mb-4 w-full break-inside-avoid 
        hover:-translate-y-1 active:-translate-y-1 
        rounded-xl p-2 cursor-pointer  
        transition-all duration-300 group 
        border-[var(--border)] border-1
        bg-[var(--note-bg)] shadow-[var(--note-shadow)]
        hover:bg-[var(--note-bg-hover)]`}
            onClick={() => toggleForm(item._id, index)}
          >
            <div
              className="note__title flex w-full 
            overflow-hidden ps-2 mb-1"
            >
              <h6
                className="min-w-0 me-2 truncate
                font-[federo] font-[500] text-nowrap
                text-[var(--note-fg)]
                transition-all duration-300 ease-in-out"
              >
                {item.title}
              </h6>
              <button
                className="ms-auto w-[30px] h-[30px]
            bg-transparent text-[var(--note-fg)]
            hover:bg-[var(--note-fg)] hover:text-[var(--note-bg)]
            active:bg-[var(--note-fg)] active:text-[var(--note-bg)]
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
              className="note__content p-2 
            text-[var(--note-fg)] text-[16px] whitespace-pre-line 
            bg-[var(--note-content-bg)] 
            group-hover:bg-[var(--note-content-bg-hover)]
            border-[var(--border)] border-1
            transition-all duration-300 ease-in-out
            rounded-md break-words"
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

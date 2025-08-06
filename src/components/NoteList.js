"use client";

import React from "react";

export default function NoteList({
  notes,
  setFormOpen,
  setNoteId,
  setAction,
}) {
  const bgColors = [
    "bg-red-200 hover:bg-red-100 active:bg-red-100",
    "bg-amber-100 hover:bg-amber-100 active:bg-amber-100",
    "bg-green-200 hover:bg-green-200 active:bg-green-200",
    "bg-sky-300 hover:bg-sky-200 active:bg-sky-200",
  ];

  function toggleForm(id) {
    setNoteId(id);
    setFormOpen(true);
    setAction("update");
  }

  return (
    <div className="w-full h-full">
      <div
        className="w-full pb-[70px]
    columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
      >
        {notes.map((item, index) => (
          <div
            key={index}
            className={`mb-4 w-full break-inside-avoid 
        hover:-translate-y-1 rounded-xl shadow-lg p-2 border-1 
        active:-translate-y-1 transition-all duration-300 
        group cursor-pointer ${bgColors[index % 4]}`}
            onClick={() => toggleForm(item.id)}
          >
            <div className="note__title flex w-full ps-2 mb-1 ">
              <h6
                className="flex items-center flex-1 min-w-0
                font-[federo] font-[500] truncate"
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
            rounded-md group-hover:bg-white break-words"
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

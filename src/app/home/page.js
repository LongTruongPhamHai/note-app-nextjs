"use client";

import React, { useState } from "react";

import NoteList from "@/components/NoteList";
import NoteForm from "@/components/NoteForm";

export default function Home() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [action, setAction] = useState("");

  return (
    <div
      className="home__container w-full min-h-screen
    flex flex-col"
    >
      <div
        className="home__header w-full h-[70px]
        flex justify-center items-center
        text-center uppercase 
       bg-white shadow-md"
      >
        <h1
          className="text-[35px] font-[federo]
        flex items-center justify-center
        cursor-pointer"
        >
          Note App
        </h1>
      </div>

      <div
        className="home__body w-full
      flex flex-1 flex-col md:flex-row relative"
      >
        <div
          className="note__list w-full
        flex justify-center p-4"
        >
          <NoteList
            setNoteId={setNoteId}
            setFormOpen={setFormOpen}
            setAction={setAction}
          />
        </div>

        <div
          className={`note__detail 
            absolute md:static top-0 right-0 bottom-0 
                py-4 z-[999] bg-[var(--background)] 
                h-full md:h-fit flex items-center 
                md:bg-transparent overflow-hidden
                transition-discrete duration-500
            ${
              isFormOpen
                ? `max-w-full md:max-w-1/2 
                md:w-[700px] ps-4 opacity-100`
                : `max-w-[0px] p-0 opacity-0`
            }
          `}
        >
          <NoteForm
            noteId={noteId}
            action={action}
            setNoteId={setNoteId}
            setFormOpen={setFormOpen}
          />
        </div>
      </div>
      <div className="add__button z-1">
        <button
          className={`
          fixed bottom-[20px] right-[20px] cursor-pointer group
          w-fit h-[50px] rounded-full px-[15px] py-[5px]
          text-white font-[federo] bg-black
          transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2
          sm:max-w-[50px] sm:overflow-hidden sm:justify-start
          sm:px-[12.5px] hover:sm:max-w-full hover:bg-gray-700
          active:bg-gray-700
          `}
          title="New Note"
          onClick={() => {
            setAction("create");
            setFormOpen(true);
          }}
        >
          <i
            className="bi bi-plus-lg
            flex text-[25px]"
          ></i>
          <span
            className="whitespace-nowrap 
            sm:text-black group-hover:sm:text-white
            sm:text-[0px] group-hover:text-[18px]
            transition-all duration-500 ease-in-out
           "
          >
            New Note
          </span>
        </button>
      </div>
    </div>
  );
}

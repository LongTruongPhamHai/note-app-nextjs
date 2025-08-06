"use client";

import React, { useEffect, useState } from "react";
import { getNotes } from "@/repositories/NoteRepository";

import NoteList from "@/components/NoteList";
import NoteForm from "@/components/NoteForm";

export default function Home() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [action, setAction] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      const noteList = await getNotes();
      if (noteList) setNotes(noteList);
    } catch (err) {
      console.error("Fetch notes failed! Error: ", err);
    }
  }

  return (
    <div
      className="home__container w-full max-h-screen
    flex flex-col"
    >
      <div
        className="home__header w-full
        flex justify-center items-center
        text-center uppercase border-b-1
       bg-white shadow-md z-[999]"
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
        min-h-[calc(100vh-70px)]
        flex flex-1 flex-row relative"
      >
        {notes.length > 0 ? (
          <div
            className="note__list w-full overflow-auto
            flex justify-center p-4"
          >
            <NoteList
              notes={notes}
              setNoteId={setNoteId}
              setFormOpen={setFormOpen}
              setAction={setAction}
            />
          </div>
        ) : (
          <div
            className="w-full min-h-full
        flex items-center justify-center 
        font-[federo] text-[30px] text-gray-500"
          >
            No notes yet!
          </div>
        )}
        <div
          className={`absolute top-0 right-0 bottom-0 
                py-4 z-[998] bg-[var(--background)] h-full 
                sm:static sm:h-fit flex items-center 
                sm:bg-transparent overflow-hidden
                transition-discrete duration-500
            ${
              isFormOpen
                ? `w-full sm:max-w-1/2 
                sm:w-[700px] ps-4 opacity-100`
                : `w-[0px] p-0 opacity-0`
            }
          `}
        >
          <NoteForm
            noteId={noteId}
            action={action}
            setAction={setAction}
            setNoteId={setNoteId}
            setFormOpen={setFormOpen}
            onNotesUpdated={fetchNotes}
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

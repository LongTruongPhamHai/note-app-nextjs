"use client";

import React, { useEffect, useState } from "react";
import { getNotes } from "@/repositories/NoteRepository";

import NoteList from "@/components/NoteList";
import NoteForm from "@/components/NoteForm";
import MenuBar from "@/components/MenuBar";

export default function Home() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [action, setAction] = useState("");
  const [notes, setNotes] = useState([]);
  const [bgColor, setBgColor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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
      className={`home__container w-full max-h-screen
    flex flex-col ${darkMode && "dark"}
    transition-all duration-300 ease-in-out`}
    >
      <div
        className={`w-full h-[70px]
        flex justify-center items-center
        text-center uppercase z-[9] relative 
        border-[var(--border)] border-b-1
        bg-[var(--header-bg)] shadow-[var(--header-shadow)] 
        transition-all duration-300 ease-in-out`}
      >
        <h1
          className="text-[35px] font-[federo]
        flex items-center justify-center
        cursor-pointer text-[var(--header-fg)]
        transition-all duration-300 ease-in-out"
        >
          Note App
        </h1>

        <button
          className="flex justify-center items-center 
          absolute right-[10px] rounded-full w-[35px] h-[35px]
          bg-[var(--header-bg)] text-[var(--header-fg)]
          hover:bg-[var(--header-bg-hover)] hover:text-[var(--header-fg-hover)]
          active:bg-[var(--header-bg-hover)] active:text-[var(--header-fg-hover)]
          transition-all duration-300 ease-in-out"
          title={`Switch to ${
            darkMode ? "light" : "dark"
          } mode`}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <i
            className={`text-[20px] ${
              darkMode ? "bi bi-sun" : "bi bi-moon"
            }`}
          ></i>
        </button>
      </div>

      <div
        className="home__body w-full 
        min-h-[calc(100vh-70px)]
        flex flex-1 flex-row relative
        bg-[var(--body-bg)]
        transition-all duration-300 ease-in-out"
      >
        {notes.length > 0 ? (
          <div
            className="note__list w-full overflow-auto
            flex justify-center p-4"
          >
            <NoteList
              notes={notes}
              darkMode={darkMode}
              setNoteId={setNoteId}
              setFormOpen={setFormOpen}
              setAction={setAction}
              setBgColor={setBgColor}
            />
          </div>
        ) : (
          <div
            className="w-full min-h-full
        flex items-center justify-center 
        font-[federo] text-[30px] text-[var(--body-fg)]"
          >
            No notes yet!
          </div>
        )}

        <div
          className={`absolute top-0 right-0 bottom-0 
                py-4 z-[998] bg-[var(--body-bg)] h-full 
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
            bgColor={bgColor}
            setBgColor={setBgColor}
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
          text-[var(--body-btn-fg)] font-[federo] bg-[var(--body-btn-bg)]
        hover:bg-[var(--body-btn-hover)] active:bg-[var(--body-btn-hover)]
          transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2
          sm:max-w-[50px] sm:overflow-hidden sm:justify-start
          sm:px-[12.5px] hover:sm:max-w-full 
          `}
          title="New Note"
          onClick={() => {
            setAction("create");
            setFormOpen(true);
            setBgColor("");
          }}
        >
          <i
            className="bi bi-plus-lg
            flex text-[25px]"
          ></i>
          <span
            className="whitespace-nowrap 
            sm:text-[var(--body-btn-bg)] group-hover:sm:text-[var(--body-btn-fg)]
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

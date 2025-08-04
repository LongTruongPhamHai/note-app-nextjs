import NoteDetail from "@/components/NoteDetail";
import NoteList from "@/components/NoteList";
import React from "react";

export default function Home() {
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
          <NoteList />
        </div>

        <div
          className="note__detail 
          w-full md:max-w-1/2 md:w-[700px] 
          h-full md:h-fit
          absolute top-0 right-0 bottom-0
          md:static
          py-4 ps-4 z-[999]"
        >
          <NoteDetail />
        </div>
      </div>
      <div className="add__button z-1">
        <button
          className="
        fixed bottom-[20px] right-[20px] p-[10px] group
        w-fit h-fit sm:max-w-[50px] sm:hover:max-w-full
        flex items-center justify-center font-[federo]
         text-white bg-black hover:bg-gray-700 
        transition-all duration-300 ease-in-out 
        rounded-full overflow-hidden cursor-pointer"
          title="New Note"
        >
          <i
            className="bi bi-plus-lg
            flex text-[30px] border-white"
          ></i>
          <span
            className="hidden ms-2 me-2
           whitespace-nowrap overflow-hidden
           group-hover:flex"
          >
            New Note
          </span>
        </button>
      </div>
    </div>
  );
}

import NoteList from "@/components/NoteList";
import React from "react";

export default function Home() {
  return (
    <div className="home__container w-full h-screen">
      <div
        className="home__header w-full p-2 
      text-center uppercase 
      bg-white shadow-md"
      >
        <h1
          className="text-4xl font-[federo]
        flex items-center justify-center
        cursor-pointer"
        >
          Note App
        </h1>
      </div>
      <div
        className="home__body h-fit w-full
      flex justify-center p-4"
      >
        <NoteList />
      </div>
      <div className="add__button">
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

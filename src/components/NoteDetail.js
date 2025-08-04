import React from "react";

export default function NoteDetail() {
  return (
    <div
      className="bg-white
      rounded-l-xl p-3 h-full shadow-lg"
    >
      <div className="flex items-center px-2">
        <div>
          <h3
            className="font-[federo] text-[15px]
        flex items-center"
          >
            Note #1
          </h3>
          <h3 className="text-[30px] font-[federo]">
            Title...
          </h3>
        </div>

        <button
          className="ms-auto text-[25px] mt-[10px]
          flex items-center justify-center 
          cursor-pointer p-2 rounded-md
          bg-transparent hover:bg-black hover:text-white
          transition-all duration-300 ease-in-out"
        >
          <i
            className="bi bi-x-lg
        flex items-center"
          ></i>
        </button>
      </div>
      <div className="flex justify-center px-2">
        <textarea
          className="resize-none bg-[var(--note-content-bg)]
          p-2 rounded-lg transition-all duration-300 ease-in-out
          outline-none focus:bg-gray-100 w-100"
          cols="30"
          rows="10"
          //   readOnly
        >
          Content...
        </textarea>
      </div>
      <div className="flex px-2 py-2 gap-2">
        <button
          className="w-100 rounded-lg cursor-pointer
        bg-green-400 hover:bg-green-500 p-1
        transition-all duration-300 ease-in-out"
        >
          Save
        </button>
        <button
          className="w-100 rounded-lg cursor-pointer
        bg-red-500 hover:bg-red-700 text-white p-1
        transition-all duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

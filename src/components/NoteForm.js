import React from "react";

export default function NoteForm({
  noteId,
  action,
  setNoteId,
  setFormOpen,
}) {
  return (
    <div
      className="bg-white
      rounded-l-xl p-3 h-fit w-full shadow-lg"
    >
      <div className="flex items-center px-2">
        <div>
          <h3
            className="font-[federo] text-[15px]
        flex items-center"
          >
            {`Note #${noteId}`}
          </h3>
          <h3 className="text-[30px] font-[federo]">
            Title...
          </h3>
        </div>

        <button
          className="ms-auto mt-[10px]
          flex items-center justify-center font-[federo]
          cursor-pointer px-3 py-1 rounded-md border-1
          bg-transparent hover:bg-black hover:text-white
          active:bg-black active:text-white gap-2
          transition-all duration-300 ease-in-out"
          onClick={() => {
            setFormOpen(false), setNoteId("");
          }}
        >
          Close
          <i
            className="bi bi-x-lg
            flex items-center 
            text-[25px]"
          ></i>
        </button>
      </div>
      <div className="flex justify-center px-2">
        <textarea
          className="resize-none bg-[var(--note-content-bg)]
          p-2 rounded-lg transition-all duration-300 ease-in-out
          outline-none focus:bg-gray-100 w-full"
          cols="30"
          rows="10"
          defaultValue="Content..."
          //   readOnly
        ></textarea>
      </div>
      <div className="flex px-2 py-2 gap-2">
        <button
          className="w-100 rounded-lg cursor-pointer
        bg-green-400 hover:bg-green-500 active:bg-green-500 
        p-1 transition-all duration-300 ease-in-out gap-1
        flex justify-center items-center font-[federo]"
        >
          Save <i className="bi bi-check2-square"></i>
        </button>
        <button
          className="w-100 rounded-lg cursor-pointer gap-1
        bg-red-500 hover:bg-red-700 active:bg-red-700
        text-white p-1 transition-all duration-300 ease-in-out
        flex justify-center items-center font-[federo]"
        >
          Delete <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

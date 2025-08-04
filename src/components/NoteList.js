import React from "react";

export default function NoteList() {
  const notes = [
    {
      title: "Lam bai tap",
      content: "Lam bai tap mon Xac suat thong ke.",
    },
    {
      title: "Di da banh",
      content:
        "4h chieu san Tan Mai ngay 5/8.\nDa voi fc no name",
    },
    {
      title: "Lam du an",
      content:
        "Hoan thien du an Note App.\nLam chuc nang xem chi tiet ghi chu.",
    },
  ];
  return (
    <div
      className=" 
    columns-1 sm:columns-2 lg:columns-3 gap-4"
    >
      {notes.map((item, index) => (
        <div
          className="mb-4 w-[300px] break-inside-avoid 
        bg-white rounded-xl shadow-lg p-4
        hover:-translate-y-1 hover:bg-[var(--note-content-bg)]
        transition-all duration-300 group"
          key={index}
        >
          <div className="note__title flex w-full ps-2 mb-1">
            <h6 className="flex items-center">
              {item.title}
            </h6>
            <button
              className="ms-auto w-[30px] h-[30px]
            bg-transparent hover:bg-black 
            text-black hover:text-white
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
            bg-[var(--note-content-bg)] p-3
            transition-all duration-300 ease-in-out
            rounded-md group-hover:bg-white"
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

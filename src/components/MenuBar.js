import React from "react";

export default function MenuBar({
  isMenuOpen,
  setMenuOpen,
  setStatus,
  setFormOpen,
  darkMode,
  setDarkMode,
}) {
  const menu = [
    {
      title: "Notes",
      icon: "bi bi-journal-bookmark",
      click: () => {
        setStatus("progress");
        setMenuOpen(false);
      },
    },
    {
      title: "Archive",
      icon: "bi bi-archive",
      click: () => {
        setStatus("archive");
        setMenuOpen(false);
      },
    },
    {
      title: "Trash",
      icon: `bi bi-trash`,
      click: () => {
        setStatus("trash");
        setMenuOpen(false);
      },
    },
    {
      title: `Switch to ${
        darkMode ? "light" : "dark"
      } mode`,
      icon: `${darkMode ? "bi bi-sun" : "bi bi-moon"}`,
      click: () => setDarkMode((prev) => !prev),
    },
  ];

  return (
    <div
      className={`relative ${darkMode && "dark"} h-full`}
    >
      <button
        className="text-[30px] h-full p-[10px]
          flex justify-center items-center 
          bg-[var(--header-bg)] text-[var(--header-fg)]
          hover:bg-[var(--header-bg-hover)] hover:text-[var(--header-fg-hover)]
          active:bg-[var(--header-bg-hover)] active:text-[var(--header-fg-hover)]
          transition-all duration-300 ease-in-out"
        title={`${isMenuOpen ? "Open" : "Close"} menu`}
        onClick={() => {
          setMenuOpen((prev) => !prev);
          setFormOpen(false);
        }}
      >
        <i
          className={`bi ${
            isMenuOpen ? "bi-x-lg" : "bi-list"
          }`}
        ></i>
      </button>

      <div
        className={`
          fixed left-0 right-0 top-[70px] bottom-0
        bg-[var(--menu-bg)] gap-4 flex flex-col overflow-hidden
        ${
          isMenuOpen
            ? "max-h-full p-3 opacity-100"
            : "max-h-0 p-0 opacity-0"
        }
        `}
      >
        {menu.map((item, index) => (
          <button
            key={index}
            className="w-full
          flex items-center px-3 py-1
          bg-[var(--menu-btn-bg)] text-[var(--menu-fg)] 
          shadow-[var(--menu-shadow)] rounded-xl
          hover:bg-[var(--menu-btn-hover)] hover:text-[var(--menu-fg)]
          active:bg-[var(--menu-btn-hover)] active:text-[var(--menu-fg)]
          transition-all duration-300 ease-in-out"
            title={item.title}
            onClick={item.click}
          >
            <p className="font-[federo] text-[20px]">
              {item.title}
            </p>
            <i
              className={`text-[25px] ms-auto ${item.icon}`}
            ></i>
          </button>
        ))}
      </div>
    </div>
  );
}

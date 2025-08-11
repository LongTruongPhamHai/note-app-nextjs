import React from "react";

export default function MenuBar({
  status,
  isMenuOpen,
  setMenuOpen,
  setStatus,
  setFormOpen,
  darkMode,
  setDarkMode,
  onNotesUpdated,
}) {
  const menu = [
    {
      name: "progress",
      title: "Notes",
      icon: "bi bi-journal-bookmark",
      click: () => {
        setStatus("progress");
        setMenuOpen(false);
      },
    },
    {
      name: "archive",
      title: "Archive",
      icon: "bi bi-archive",
      click: () => {
        setStatus("archive");
        setMenuOpen(false);
      },
    },
    {
      name: "trash",
      title: "Trash",
      icon: `bi bi-trash`,
      click: () => {
        setStatus("trash");
        setMenuOpen(false);
      },
    },
    {
      name: "reload",
      title: "Reload",
      icon: "bi bi-arrow-clockwise",
      click: () => {
        onNotesUpdated();
        setMenuOpen(false);
      },
    },
    {
      title: `Switch to ${
        darkMode ? "light" : "dark"
      } mode`,
      icon: `${darkMode ? "bi bi-sun" : "bi bi-moon"}`,
      click: () =>
        setDarkMode((prev) => {
          const newValue = !prev;
          localStorage.setItem("DarkMode", newValue);
          return newValue;
        }),
    },
  ];

  return (
    <div
      className={`relative ${darkMode && "dark"} h-full
      sm:flex sm:items-center`}
    >
      <button
        className={`text-[30px] h-full p-[10px]
          flex justify-center items-center 
          bg-[var(--header-bg)] text-[var(--header-fg)]
          hover:bg-[var(--header-bg-hover)] hover:text-[var(--header-fg-hover)]
          active:bg-[var(--header-bg-hover)] active:text-[var(--header-fg-hover)]
          sm:hidden
          transition-all duration-300 ease-in-out`}
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
        sm:max-h-full sm:opacity-100 sm:w-full
        sm:flex-row sm:static sm:bg-transparent
        sm:items-center sm:gap-2`}
      >
        {menu.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center px-3 py-1 rounded-xl
          bg-[var(--menu-btn-bg)] shadow-[var(--menu-shadow)] group
          text-[var(--menu-fg)] transition-all duration-300 ease-in-out
          hover:bg-[var(--menu-btn-hover)] hover:text-[var(--menu-fg)]
          active:bg-[var(--menu-btn-hover)] active:text-[var(--menu-fg)]
          sm:w-[40px] sm:h-[40px] sm:p-0 sm:bg-[var(--header-bg)] 
          sm:shadow-[0] sm:rounded-full sm:hover:bg-[var(--header-fg)]
          sm:active:bg-[var(--header-fg)] sm:hover:text-[var(--header-bg)]
          sm:active:text-[var(--header-bg)] 
          ${item.name === "reload" && "ms-auto"}
          `}
            title={item.title}
            onClick={item.click}
          >
            <p className="font-[federo] text-[20px] sm:hidden">
              {item.title}
            </p>
            <i
              className={`text-[25px] ms-auto ${item.icon} 
              sm:mx-auto sm:ms-0 ${
                status === item.name && "sm:border-b-2"
              } group-hover:sm:border-b-0 group-active:sm:border-b-0`}
            ></i>
          </button>
        ))}
      </div>
    </div>
  );
}

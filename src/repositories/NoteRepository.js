import axiosClient from "@/utils/axiosClient";

export const createNote = async (newNote) => {
  try {
    const res = await axiosClient.post("/", newNote);
    return res.data;
  } catch (error) {
    console.error("Add note failed! Error: ", error);
  }
};

export const getNotes = async () => {
  try {
    const res = await axiosClient.get("/");
    return res.data;
  } catch (error) {
    console.error("Get notes failed! Error: ", error);
  }
};

export const getNoteByStatus = async (status) => {
  try {
    const { data } = await axiosClient.get(`/`);
    return (
      data?.filter((note) => note.status === status) || []
    );
  } catch (error) {
    console.error("Get note failed! Error: ", error);
  }
};

export const getNoteById = async (id) => {
  try {
    const res = await axiosClient.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.error("Get note failed! Error: ", error);
  }
};

export const searchNoteByTitle = async (title) => {
  try {
    const notes = await axiosClient.get(`/`);
    const result = [];
    for (n in notes) {
      if (n.title.toLowerCase().match(title.toLowerCase()))
        result.push(n);
    }
    return result;
  } catch (error) {
    console.error("Search note failed! Error: ", error);
  }
};

export const updateNote = async (id, updatedData) => {
  try {
    const res = await axiosClient.patch(
      `/${id}`,
      updatedData
    );
    return res.data;
  } catch (error) {
    console.error("Update note failed! Error: ", error);
  }
};

export const deleteNote = async (id) => {
  try {
    await axiosClient.delete(`/${id}`);
  } catch (error) {
    console.error("Delete note failed! Error: ", error);
  }
};

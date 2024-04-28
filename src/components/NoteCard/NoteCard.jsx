"use client";
import { useState, useEffect } from "react";
import { FcGenericSortingDesc } from "react-icons/fc";
import { CgCalendarDates } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";

const NoteCard = () => {
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedNote, setEditedNote] = useState({});

  // Fetches the note data from the server
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/notes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }

        const data = await response.json();
        setNotes(data.notes);
      } catch (error) {
        console.error("Error fetching notes:", error.message);
        alert("Failed to fetch notes. Please try again.");
      }
    };

    fetchNotes();
  }, []);

  const deleteNote = async (id) => {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmDelete) {
      return; // If user cancels, do nothing
    }

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      // Filter out the deleted note from the state
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error.message);
      alert("Failed to delete note. Please try again.");
    }
  };

  const editNote = async (id, title, description) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to edit note");
      }

      // Update the note in the state
      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description } : note
      );
      setNotes(updatedNotes);
      setEditMode(false);
    } catch (error) {
      console.error("Error editing note:", error.message);
      alert("Failed to edit note. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-3xl pb-8 font-bold flex justify-center underline">
        Notes
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-4 ">
        {notes.map((note) => (
          <div key={note._id} className="w-1/4">
            <div className="bg-white p-3 rounded-xl mb-4">
              {editMode && editedNote._id === note._id ? (
                <div className="p-4 border border-gray-200 rounded-md">
                  <input
                    type="text"
                    value={editedNote.title}
                    onChange={(e) =>
                      setEditedNote({ ...editedNote, title: e.target.value })
                    }
                    className="w-full mb-2 p-2 border border-gray-300 rounded-md"
                    placeholder="Title"
                  />
                  <textarea
                    value={editedNote.description}
                    onChange={(e) =>
                      setEditedNote({
                        ...editedNote,
                        description: e.target.value,
                      })
                    }
                    className="w-full mb-2 p-2 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Description"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={() =>
                        editNote(
                          editedNote._id,
                          editedNote.title,
                          editedNote.description
                        )
                      }
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold uppercase pb-3 flex items-center gap-1">
                    <FcGenericSortingDesc className="rotate-180" />
                    {note.title}
                  </h3>
                  <div className="flex items-center">
                    <p className="h-[15vh] overflow-auto py-3 text-justify">
                      {note.description}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <CgCalendarDates />
                      <small className="text-gray-500">
                        Posted At:{" "}
                        {format(new Date(note.createdAt), "dd/MM/yyyy hh:mm a")}{" "}
                        {/* Format createdAt timestamp */}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <CgCalendarDates />
                        <small className="text-gray-500">
                          Updated At:{" "}
                          {format(
                            new Date(note.updatedAt),
                            "dd/MM/yyyy hh:mm a"
                          )}{" "}
                          {/* Format updatedAt timestamp */}
                        </small>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <MdEdit
                            className="text-blue-500 text-xl cursor-pointer hover:text-black duration-300"
                            onClick={() => {
                              setEditMode(true);
                              setEditedNote({
                                _id: note._id,
                                title: note.title,
                                description: note.description,
                              });
                            }}
                          />
                        </span>
                        <span>
                          <MdDelete
                            className="text-red-600 text-xl cursor-pointer hover:text-black duration-300"
                            onClick={() => deleteNote(note._id)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteCard;

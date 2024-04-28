"use client";
import { useState, useEffect } from "react";
import { FcGenericSortingDesc } from "react-icons/fc";
import { CgCalendarDates } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const NoteCard = () => {
  const [notes, setNotes] = useState([]);

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

  return (
    <div>
      <h2 className="text-3xl pb-8 font-bold flex justify-center underline">
        Notes
      </h2>
      <div className="flex justify-center items-center  flex-wrap gap-4 ">
        {notes.map((note, index) => (
          <div key={index} className="w-1/4">
            <div className="bg-white p-3 rounded-xl mb-4">
              <h3 className="text-xl font-bold uppercase pb-3 flex items-center gap-1">
                <FcGenericSortingDesc className="rotate-180" />

                {note.title}
              </h3>
              <div className="flex items-center">
                <p className="h-[10vh] overflow-auto py-3 text-justify">
                  {note.description}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <CgCalendarDates />
                  <small className="text-gray-500">
                    Posted At: {note.createdAt}
                  </small>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <CgCalendarDates />
                    <small className="text-gray-500">
                      Updated At: {note.updatedAt}
                    </small>
                  </div>
                  <div className="flex gap-2">
                  <span><MdEdit className="text-blue-500 text-xl cursor-pointer hover:text-black duration-300" /></span>
                  <span> <MdDelete className="text-red-600 text-xl cursor-pointer hover:text-black duration-300" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteCard;

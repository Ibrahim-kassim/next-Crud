'use client'
import { useState } from "react";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdDescription } from "react-icons/md";

const Page = () => {
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");

  const handleAddNote = async () => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add note');
      }
      setTitle("");
      setDescription("");
      alert('Note added successfully');
    } catch (error) {
      console.error('Error adding note:', error.message);
      alert('Failed to add note. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center text-black">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h1 className="text-black flex items-center justify-center font-bold text-2xl">
          Create New Note Book Here
        </h1>
        <div className="flex flex-col items-start gap-2 p-4  mb-4">
          <div className="flex justify-center items-center gap-2">
            <MdOutlineSubtitles />
            <h1>Title</h1>
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
            placeholder="Enter Your Note Title"
          />
          <div className="flex justify-center items-center gap-2">
            <MdDescription />
            <h1>Description</h1>
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="border h-52 border-gray-300 rounded-lg py-2 px-4 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-300"
            placeholder="Enter Your Note Description"
          />
        </div>
        <div className="flex justify-center items-center">
          <button 
            onClick={handleAddNote}
            className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500  duration-300 "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center text-black">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h1 className="text-black flex items-center justify-center font-bold text-2xl">
          Create New Note Book Here
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-center">Add List</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item"
          />
          <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import { FaPlusCircle } from "react-icons/fa";



const Navbar = () => {
  const navLists = [
    { name: "Add New Note", icon: <FaPlusCircle/>  , link: "/create-new-note" },
  ];

  return (
    <div>
      <div className="w-full flex items-center justify-between px-4 py-4 bg-blue-500 text-white ">
        <div>
          <h1 className="text-2xl font-bold font-serif select-none">NoteBook</h1>
        </div>

        <ul className="flex items-center justify-center gap-5">
          {navLists.map((item, index) => (
            <div className="flex gap-4 justify-center items-center " key={index}>
            <li><a className="hover:text-black duration-300 font-semibold select-none" href="/">Home</a></li>
            <li><a className="hover:text-black duration-300 font-semibold select-none" href="/">About Us</a></li>
            <li><a className="hover:text-black duration-300 font-semibold select-none" href="/">Featured</a></li>
              <li className="">
                <a className="bg-black p-3 rounded-3xl flex justify-center items-center gap-4 hover:bg-white hover:text-black duration-300 select-none font-semibold" href={item.link}>{item.name} {item.icon} </a>

              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

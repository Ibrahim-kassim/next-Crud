import React from "react";

const Navbar = () => {
  const navLists = [
    { name: "New-NoteBook", icon: "+", link: "/create-new-note" },

  ];

  return (
    <div>
      <div className="w-full flex items-center justify-around py-4 border-b-2 border-red-400 ">
        <div ><a href="/">NoteBook</a></div>

        <ul className="flex items-center justify-center gap-5">
          {navLists.map((item, index) => (
            <div className="" key={index}>
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

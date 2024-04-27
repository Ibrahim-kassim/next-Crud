import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";

const NoteCard = ({ title, createdAt, updatedAt, lists }) => {
  return (
    <div className="w-80 relative h-96 bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="flex absolute right-5 top-2 items-center justify-around ">
        <RiEditLine className="text-blue-500 mr-2 cursor-pointer hover:" />
        <RiDeleteBinLine className="text-red-500 cursor-pointer" />
      </div>
      {/* Container for card content */}
      <div className="p-6 flex flex-col h-full">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          Created at: {createdAt} | Updated at: {updatedAt}
        </p>
        {/* Scrollable area for lists */}
        <div className="overflow-auto max-h-48">
          <ul className="flex flex-col items-start w-full">
            {lists.map((list, index) => (
              <li
                key={index}
                className="border-b border-gray-300 py-2 px-4 w-full flex justify-between items-center"
              >
                {list}
                <div className="flex items-center gap-5">
                  <RiEditLine className="text-blue-500 mr-2 cursor-pointer" />
                  <RiDeleteBinLine className="text-red-500 cursor-pointer" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

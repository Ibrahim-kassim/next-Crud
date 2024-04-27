import NoteCard from "@/components/NoteCard/NoteCard";

const Home = () => {
  const noteData = {
    title: "Name of the Note",
    createdAt: "April 28, 2024",
    updatedAt: "April 30, 2024",
    lists: [
      "List 1",
      "List 2",
      "List 3",
      "List 4",
      "List 5",
      "List 6",
      "List 7",
    ],
  };
  return (
    <div className="w-full h-full flex items-center py-14   overflow-hidden text-black ">
      <div className="flex items-center gap-4 ">
        <NoteCard {...noteData} />
        <NoteCard {...noteData} /> 
      </div>
    </div>
  );
};

export default Home;

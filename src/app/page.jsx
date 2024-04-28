import NoteCard from "@/components/NoteCard/NoteCard";

const Home = () => {

  return (
    <div className="w-full h-full items-start flex py-14   overflow-hidden text-black ">
      <div className="flex items-center justify-center w-full gap-4 ">
        <NoteCard />
      </div>
    </div>
  );
};

export default Home;

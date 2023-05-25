import Image from "next/image";

const StoryCard = ({ id, title, genre, penName, image }) => {
  return (
    <div className="card m-2 curor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <img className="object-fill" src="/image01.jpg" alt="nature" />
      <span className="absolute top-4 right-2 text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right">
        Incomplete
      </span>
      <div className="m-2">
        <h2 className="text-lg">The Legend of BBY-19</h2>
        <h3 className="text-md mb-1">Sci-Fi | David</h3>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
          Our team, BBY 19 is developing a community-driven space that connects
          writers and...
        </p>
      </div>
    </div>
  );
};

export default StoryCard;

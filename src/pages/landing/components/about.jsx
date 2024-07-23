import { Link } from "react-router-dom";
import man from "../../../assets/images/man3.png";
import { Play } from "lucide-react";

const About = () => {
  return (
    <div className="flex relative items-center justify-center align-middle p-16 min-h-[600px] bg-[#3B5787]">
      <img src={man} alt="about" className="absolute -left-48 h-[600px]" />
      <div className="grid grid-cols-2">
        <div className="col-span-1"></div>
        <div className="col-span-1 w-auto text-white px-10 flex flex-col gap-5">
          <h5 className="text-sm font-bold text-gray-400">ABOUT FURNISH</h5>
          <h1 className="text-5xl font-bold  text-gray-950">
            Quality Makes the Belief for Customers
          </h1>
          <p className="text-lg text-gray-300">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className=" flex justify-left align-middle items-center gap-4 ">
            <Link to="/" className="f bg-orange-600 p-8 rounded-full">
              <Play size={20} />
            </Link>
            <p className="text-orange-400 font-bold ">Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

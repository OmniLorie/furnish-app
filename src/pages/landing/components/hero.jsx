import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#607F9E] place-content-center pl-40 pr-40 gap-4">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-5">
          <div className="flex flex-col text-5xl">
            <span className="text-gray-50 font-thin">Best Design of</span>
            <span className="text-gray-950 font-bold">
              Architectural Collections{" "}
            </span>
            <p className="font-thin text-xl w-2/3 text-gray-50">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <button
            style={{ color: "#267AA4" }}
            className="bg-white text-md font-bold p-3 px-5 my-5 border capitalize rounded-full drop-shadow-lg hover:shadow-xl"
          >
            DISCOVER
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="hero-img" className=" w-full h-full" />
      </div>
    </div>
  );
};
export default Hero;

import { Link } from "react-router-dom";
import K from "../constants";

const Navbar = () => {
  return (
    <div className="relative bg-transparent  flex">
      <div className="flex justify-between px-40 py-10 absolute w-full left-0 top-0">
        <span className="text-6xl font-bold">Build.</span>
        <div className="flex gap-x-16 font-bold">
          {K.NAVLINKS.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;

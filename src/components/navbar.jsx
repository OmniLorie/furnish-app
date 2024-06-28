import { Link } from "react-router-dom";
import K from "../constants"

const Navbar = () => {
  return (
    <div className="flex justify-between px-40 py-10 fixed w-full left-0 top-0">
      <span>Buildings</span>
      <div className="flex gap-x-16">
        {
          K.NAVLINKS.map(
            (item,index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
            
          )
        }
      </div>
    </div>
  )
}

export default Navbar
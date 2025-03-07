import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-6 py-3">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 font-thin text-3xl">Z4id</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl">
        <FaFacebookSquare />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
};

export default Navbar;

import { FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Projects", "About", "Contact"];

  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-gray-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="flex items-center justify-between py-4 px-6">
        {/* LOGO */}
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl font-semibold tracking-wide cursor-pointer"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            Zaid
          </span>
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <FaGithub
            size={22}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition duration-300"
            onClick={() => window.open("https://github.com/zaid1243", "_blank")}
          />
          <FaInstagram
            size={22}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition duration-300"
            onClick={() =>
              window.open("https://www.instagram.com/zaid47____", "_blank")
            }
          />
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-gray-300">
          {menuOpen ? (
            <FaTimes size={24} onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-neutral-950/90 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              {item}
            </button>
          ))}

          <div className="flex gap-4">
            <FaGithub
              size={22}
              className="text-gray-300 hover:text-blue-400"
              onClick={() =>
                window.open("https://github.com/zaid1243", "_blank")
              }
            />
            <FaInstagram
              size={22}
              className="text-gray-300 hover:text-blue-400"
              onClick={() =>
                window.open("https://www.instagram.com/z4id__7", "_blank")
              }
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

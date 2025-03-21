import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}>
        <div className="container flex justify-between pb-[30px] pt-[30px]">
        <h1 className="text-xl font-bold">Fazliddin Khayrullaev's Blog</h1>
        <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-gray-600 "
          }
        >
          Bosh sahifa
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400 " : "text-gray-600 "
          }
        >
          Men haqimda
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-400 " : "text-gray-600 "
          }
        >
          Loyihalar
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400 " : "text-gray-600"
          }
        >
          Bog‘lanish
        </NavLink>
      </div>
        </div>
      
    </nav>
  );
};

export default Navbar;

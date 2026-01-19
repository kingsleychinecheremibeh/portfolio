import  { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen ] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="text-2xl font-bold text-white"><a href="/" >Neche<span className="text-orange-500">.</span></a></div>

      <ul className="hidden md:flex space-x-8 font-medium text-white">
        <li><NavLink to="/" className={({ isActive }) => isActive ? " text-orange-500 hover:text-orange-500/30 transition" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500 hover:text-orange-500/30 transition" : ""}>About</NavLink></li>
        <li><NavLink to="/project" className={({ isActive }) => isActive ? " text-orange-500 hover:text-orange-500/30 transition" : ""}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-500 hover:text-orange-500/30 transition" : ""}>Contact</NavLink></li>
      </ul>

      <div onClick={toggleMenu} className="flex flex-col justify-between w-6 h-5 cursor-pointer md:hidden">
        <span className={`h-0.5 w-full bg-orange-500 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`h-0.5 w-full bg-orange-500 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`h-0.5 w-full bg-orange-500 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </div>
      <ul className={`absolute top-16 left-0 w-full bg-gray-950 flex flex-col items-center gap-6 py-8 transition-all duration-300 md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-orange-500 hover:text-orange-500/30 transition">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-orange-500 hover:text-orange-500/30 transition">About</NavLink>
        </li>
        <li>
          <NavLink to="/project" onClick={() => setIsOpen(false)} className="text-lg font-medium text-orange-500 hover:text-orange-500/30 transition">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-orange-500 hover:text-orange-500/30 transition">Contact</NavLink>
        </li>
      </ul>

    </nav> 
  )
}

export default Navbar;
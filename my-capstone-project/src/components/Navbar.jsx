import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // We add this one line of state to handle the opening/closing on mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-4 bg-gray-900"> 
      {/* Main Bar */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="./logo.png" alt="logo" className="h-12 w-auto" />
          <h1 className="font-bold ml-2">Jesus Mission Church</h1>
        </div>

        {/* Desktop Links: 'hidden' on mobile, 'md:flex' on desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Sermons">Sermons</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* Hamburger Button: 'block' on mobile, 'md:hidden' on desktop */}
        <button 
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu: Only shows when isOpen is true and screen is small */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 space-y-2 flex flex-col`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/Sermons" onClick={() => setIsOpen(false)}>Sermons</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
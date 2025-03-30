"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "hero" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "project" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#9810FA] text-white rounded-full flex items-center justify-center text-lg font-bold">
            P
          </div>
          <span className="text-xl font-semibold text-gray-900">Pritom</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          {navLinks.map(({ name, path }) => (
            <ScrollLink
              key={name}
              to={path}
              smooth={true}
              duration={800}
              offset={-70} // Adjust for fixed navbar
              className="cursor-pointer hover:text-[#9810FA] transition duration-300"
            >
              {name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 p-4 flex flex-col space-y-4 border-b border-gray-200">
          {navLinks.map(({ name, path }) => (
            <ScrollLink
              key={name}
              to={path}
              smooth={true}
              duration={800}
              offset={-70}
              className="text-gray-700 hover:text-[#9810FA] transition duration-300 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {name}
            </ScrollLink>
          ))}

        
        </div>
      )}
    </nav>
  );
}

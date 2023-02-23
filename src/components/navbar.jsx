import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full fixed top-0 bg-white z-20">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <div className="">
          <h1 className="text-2xl font-bold text-indigo-900">
            Alejandro Herrera
          </h1>
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm">
          <li className="hover:text-gray-500">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* hamburger menu */}
        <div
          className="space-y-1 md:hidden cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        <ul
          className={
            open
              ? 'bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center hidden'
              : 'bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center'
          }
        >
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(!open)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#221932] p-4 border-b border-[#775E88] border-opacity-20">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-[#988289] hover:text-[#775E88] transition duration-300">Home</Link></li>
        <li><Link to="/about" className="text-[#988289] hover:text-[#775E88] transition duration-300">About Me</Link></li>
        <li><Link to="/work" className="text-[#988289] hover:text-[#775E88] transition duration-300">My Work</Link></li>
        <li><Link to="/blog" className="text-[#988289] hover:text-[#775E88] transition duration-300">My Blog</Link></li>
        <li><Link to="/courses" className="text-[#988289] hover:text-[#775E88] transition duration-300">My Courses</Link></li>
        <li><Link to="/press" className="text-[#988289] hover:text-[#775E88] transition duration-300">Press Kit</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
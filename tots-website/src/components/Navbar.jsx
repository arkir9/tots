import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-80 p-4 fixed top-0 left-0 right-0 h-[69px]">
      <div className="container mx-auto flex justify-center items-center h-full">
        <ul className="flex space-x-8">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
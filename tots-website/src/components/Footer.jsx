import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#221932] text-[#988289] p-8 text-center border-t border-[#775E88] border-opacity-20">
      <p className="mb-4">© 2024 Asha Mukanda. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-[#775E88] hover:text-[#988289]"><FaInstagram size={24} /></a>
        <a href="#" className="text-[#775E88] hover:text-[#988289]"><FaFacebook size={24} /></a>
        <a href="#" className="text-[#775E88] hover:text-[#988289]"><FaTwitter size={24} /></a>
        <a href="#" className="text-[#775E88] hover:text-[#988289]"><FaLinkedin size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#541533] py-20 text-center border-b border-[#775E88] border-opacity-20">
      <h1 className="text-4xl font-bold mb-6 text-[#988289]">
        Empowering Communities Through Effective Advocacy and Fundraising
      </h1>
      <p className="text-xl mb-10 text-[#775E88] max-w-3xl mx-auto">
        Building strong donor relationships, optimizing digital campaigns, and driving impactful social change.
      </p>
      <a 
        href="#contact" 
        className="bg-[#722548] text-[#988289] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#221932] transition duration-300"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;

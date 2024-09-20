import React from 'react';

const Content = () => {
  return (
    <section className="bg-[#060407] py-12 border-b border-[#775E88] border-opacity-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 border-b border-[#541533] pb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#775E88]">I have commenced my journey to fulfillment.</h2>
          <p className="text-[#988289]">At the end of my journey I want to look back and say, 'A life well lived, dedicated to service to God and man.'</p>
        </div>
        
        <div className="mb-12 border-b border-[#541533] pb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#775E88]">Oh, taste and see the Lord is good</h2>
          <p className="text-[#988289]">Blessed is the man who trusts in Him. Psalm 34:8</p>
        </div>
        
        <div className="mb-12 border-b border-[#541533] pb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#775E88]">When people ask me how to build their personal brand</h2>
          <p className="text-[#988289]">I always say live an authentic life and share your story.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#775E88]">About Me</h2>
          <p className="mb-4 text-[#988289]">Your brief introduction goes here...</p>
          <a href="#" className="bg-[#722548] text-[#988289] px-6 py-3 rounded hover:bg-[#221932] transition duration-300">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Content;

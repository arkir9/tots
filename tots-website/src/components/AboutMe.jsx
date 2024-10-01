import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-[#060407] text-[#988289]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#775E88]">About Asha Mukanda</h2>
        <div className="mb-8">
          <p className="text-lg">
            Asha Mukanda is a seasoned Communications and Fundraising Manager with a proven track record of enhancing brand visibility, cultivating strong donor relationships, and crafting compelling digital content. With years of experience across various platforms and industries, Asha's innovative strategies have led to a 25% increase in donor retention and a 10% rise in gift size for multiple organizations.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-[#775E88]">Key Highlights</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Spearheaded integrated communications & fundraising strategy</li>
            <li>Fostered donor relationships and improved retention rates</li>
            <li>Strategic planning and reporting for international projects</li>
            <li>Managed content creation and digital platforms to optimize engagement</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-[#775E88]">What I Offer</h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Fundraising Strategy Development</h4>
            <p>Collaborating with organizations to design data-driven fundraising plans that align with budgetary and programmatic goals.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Digital Content Creation & Management</h4>
            <p>Tailored storytelling and multi-platform content strategies that drive donor engagement and retention.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Social Media Optimization</h4>
            <p>Managing social channels, ensuring targeted campaigns reach and engage with key audiences across Facebook, Instagram, X, TikTok, and LinkedIn.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Event & Webinar Management</h4>
            <p>Coordinating virtual and in-person fundraising events, delivering impactful experiences for stakeholders.</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#775E88]">Proven Impact</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Developed and executed strategies that resulted in a 25% boost in donor retention and increased average gift size by 10%.</li>
            <li>Built strong partnerships with media outlets, donors, and partners to advance social change efforts.</li>
            <li>Delivered high-quality donor reports, securing grants like a $5000 WASH initiative from Cisco.</li>
            <li>Increased website traffic by 30% and social media engagement by 45%, driving audience growth.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

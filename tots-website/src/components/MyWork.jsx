import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-[#060407] font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-[#775E88] max-w-4xl">
          My Work Timeline
        </h2>
        <p className="text-[#988289] text-sm md:text-base max-w-sm">
          Here's a timeline of my journey in advocacy and fundraising.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#221932] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#541533] border border-[#775E88] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#775E88]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#775E88]">
                {item.title}
              </h3>
              <div className="text-[#988289]">{item.content}</div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#775E88] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#722548] via-[#541533] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const MyWork = () => {
  const timelineData = [
    {
      title: "Executive Assistant / Communication Assistant",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">The Open Institute</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Supported CEO and staff, streamlining communication and decision-making</li>
            <li>Managed budgets and financial oversight</li>
            <li>Executed successful webinars with high engagement rates</li>
            <li>Created engaging video content, increasing views by 20%</li>
            <li>Managed executive travel logistics efficiently</li>
          </ul>
        </div>
      )
    },
    {
      title: "Executive Assistant",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">Get Sh!t Done</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Facilitated CEO-customer service communication</li>
            <li>Managed content strategy and social media</li>
            <li>Maintained website and managed events via Eventbrite</li>
            <li>Conducted market research to inform strategies</li>
          </ul>
        </div>
      )
    },
    {
      title: "Writer / Financial Contributor",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">FemInstyle Africa, London</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contributed financial articles for African women's empowerment</li>
            <li>Conducted in-depth research on relevant financial topics</li>
            <li>Promoted content across social media platforms</li>
            <li>Managed email marketing campaigns</li>
            <li>Led management of the Open Chats Podcast</li>
          </ul>
        </div>
      )
    },
    {
      title: "Executive and Operations Assistant",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">Mu Delta Alpha Sorority Inc</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Managed founder's calendar and day-to-day operations</li>
            <li>Oversaw "One Girl at a Time" podcast production</li>
            <li>Managed HR processes and payroll</li>
            <li>Maintained website, increasing traffic by 15%</li>
            <li>Coordinated CEO's international travel</li>
            <li>Managed Sakina Home for Girls operations and budget</li>
            <li>Implemented new software tools for improved efficiency</li>
          </ul>
        </div>
      )
    },
    {
      title: "Podcast Management",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">Supply Chain Africa News</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provided comprehensive support to Executive Director</li>
            <li>Managed content creation across various channels</li>
            <li>Oversaw SCAN podcast management and promotion</li>
            <li>Increased social media following by 25%</li>
            <li>Generated insightful reports on podcast performance</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#060407] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#775E88]">My Work Experience</h1>
        <p className="text-[#988289] mb-12">
          Here's a timeline of my key roles and achievements in executive assistance, communication, and content management.
        </p>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default MyWork;

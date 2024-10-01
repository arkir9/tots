import { useState, useEffect } from 'react';
import { cn } from "../lib/utils"; // Adjust the import path to suit your Vite project structure

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://www.clippings.me/users/mukanda');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const articles = doc.querySelectorAll('.portfolio-item');
        
        const blogData = Array.from(articles).map(article => ({
          title: article.querySelector('.portfolio-title')?.textContent.trim() || '',
          description: article.querySelector('.portfolio-description')?.textContent.trim() || '',
          link: article.querySelector('a')?.href || '',
          image: article.querySelector('img')?.src || '',
        }));

        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BentoGrid>
      {blogs.map((blog, index) => (
        <BentoGridItem
          key={index}
          title={blog.title}
          description={blog.description}
          header={
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full h-40 rounded-t-xl"
            />
          }
          icon={
            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read More
            </a>
          }
        />
      ))}
    </BentoGrid>
  );
};

const Blog = () => {
  return (
    <section className="py-16 bg-[#060407] text-[#988289]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#775E88]">My Blog Posts</h2>
        <BlogGrid />
      </div>
    </section>
  );
};

export default Blog;

import React from 'react';
import { Link } from "react-router-dom";

const BlogsCard = ({ image, date, title, description, author }) => {
  return (
    <Link 
      to={`/blogs/${title}`} 
      state={{ image, date, title, description, author }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className='p-4 bg-blue-50 shadow-xl transition-all duration-500 rounded-md hover:bg-blue-100 cursor-pointer text-blue-900' data-aos="zoom-in" data-aos-duration="2000">
        <div className='overflow-hidden'>
          <img src={image} className='mx-auto h-[250px]  lg:w-full object-cover transition-all duration-700 hover:scale-110' alt={title} />
        </div>
        <div className='flex justify-between pt-2 text-gray-500'>
          <p>{date}</p>
          <p>by-{author}</p>
        </div>
        <div className='space-y-2 py-3'>
          <h1 className='line-clamp-1 font-bold'>{title}</h1>
          <p className='line-clamp-2'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;

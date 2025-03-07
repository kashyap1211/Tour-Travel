import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogsCom from '../Components/BlogsCom';

const BlogsDetails = () => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state || {};

  if (!location.state) {
    return <p className="text-center text-red-500">No blog data available.</p>;
  }

  return (
    <div className="min-h-screen lg:pt-[120px] pt-[100px] py-10 px-4 cursor-pointer">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-2xl"data-aos="zoom-in" data-aos-duration="1000">
        <img data-aos="zoom-in" data-aos-duration="2000" src={image} className="w-full h-[300px] object-cover rounded-md" alt={title} />
        <h1 data-aos="fade-up" data-aos-duration="2000" className="text-2xl font-bold mt-4">{title}</h1>
        <p data-aos="fade-up" data-aos-duration="2000" className="text-gray-500">{date} | By {author}</p>
        <p data-aos="fade-up" data-aos-duration="2000" className="mt-4 font-serif">{description}</p>
      </div>
      <BlogsCom/>
    </div>
  );
};

export default BlogsDetails;

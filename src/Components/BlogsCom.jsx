import React from 'react';
import BlogsCard from '../Components/BlogsCard';

const BlogsData = [
  {
    id: 1,
    image: "/usa.jpg", // Use relative URL
    title: " USA",
    author: "Kashyap",
    date: "January, 2012",
    description: "The United States is a traveler’s paradise, offering diverse landscapes, vibrant cities, and rich history. From the towering skyscrapers of New York City to the breathtaking Grand Canyon, every corner of the country has something unique to explore. California boasts stunning beaches, Hollywood glamour, and the iconic Golden Gate Bridge, while Florida is home to theme park magic and sunny coastlines. For nature lovers, Yellowstone and Yosemite offer unforgettable outdoor adventures. History buffs can dive into the past in Washington, D.C., and foodies can indulge in everything from deep-dish pizza in Chicago to fresh seafood in New Orleans. Whether you seek adventure, culture, or relaxation, the USA has it all. Plan your American journey and experience the best of this vast and diverse country! ✈️🌎. Would you like to highlight any specific destinations? 😊 ",
  },
  {
    id: 2,
    image: "/tajmahal.png",
    title: "Taj Mahal",
    author: "Kashyap",
    date: "November, 2019",
    description: "The Taj Mahal, a symbol of love and architectural brilliance, stands majestically on the banks of the Yamuna River in Agra, India. Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this white marble wonder is a UNESCO World Heritage Site and one of the Seven Wonders of the World. The intricate carvings, symmetrical gardens, and stunning reflection in the pool make it a breathtaking sight, especially during sunrise and sunset. The calligraphy on its walls, semi-precious stone inlays, and the grand dome showcase the finest Mughal craftsmanship. Visitors from around the world come to admire its beauty and rich history. Whether you're a history lover, a romantic at heart, or a photography enthusiast, the Taj Mahal offers an unforgettable experience. A visit to this masterpiece is truly a journey through time and love. 🌟 A timeless tribute to eternal love! 🌟",
  },
  {
    id: 3,
    image: "/toronto.jpg",
    title: "Canada",
    author: "Kashyap",
    date: "June, 2021",
    description: "Canada, the second-largest country in the world, is a paradise for travelers seeking breathtaking landscapes, vibrant cities, and rich cultural experiences. From the towering Rocky Mountains in Alberta to the picturesque coastlines of Nova Scotia, Canada offers something for every explorer. Visit Banff and Jasper National Parks for stunning hikes, witness the magical Northern Lights in Yukon, or take a scenic road trip along the Cabot Trail. In cities like Toronto, Vancouver, and Montreal, experience diverse cuisine, lively arts scenes, and iconic landmarks such as the CN Tower and Old Quebec. For adventure lovers, Canada’s wilderness offers skiing, kayaking, and wildlife spotting. Don’t forget to try poutine, maple syrup treats, and fresh seafood. Whether you seek nature, culture, or adventure, Canada promises unforgettable memories. Would you like a blog focused on a specific theme, such as adventure, food, or culture? 😊",
  },
];

const BlogsCom = () => {
  return (
    <div className='py-10 lg:px-[35px] px-[10px]'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-blue-500/50 pl-2 text-3xl font-bold' data-aos="fade-right" data-aos-duration="2000">
          Our Latest Blogs
        </h1>

        {/* Blog Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {BlogsData.map((item) => (
            <BlogsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsCom;

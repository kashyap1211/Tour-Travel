// import React from 'react'
// import { DiResponsive } from 'react-icons/di'
// import Img1 from "../../public/img1.jpg"
// import Img2 from "../../public/img2.jpg"
// import Img3 from "../../public/img3.jpg"


// const TestimonialData = [
//   {
//     id: 1,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore odio esse.",
//     image: Img1,  // Use the imported image directly
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore odio esse.",
//     image: Img2,
//   },
//   {
//     id: 3,
//     name: "Michael Johnson",
//     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore odio esse.",
//     image: Img3,
//   }
// ];


// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true, // Corrected from Infinity
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1, // Fixed typo
//           infinite: true, // Fixed typo
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
  
//   }

//   return (
//     <div className='py-10'>
//       <div className='container'>
//       {/* header section  */}
//       <div className='text-center mb-20 max-w[400px] mx-auto'>
//         <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-800'>
//            Testimonial
//         </h1>
//         <p className='text-center mx-auto py-[20px] w-[700px] text-gray-600'>"Our trip was absolutely amazing! The itinerary was well-planned, and the accommodations were top-notch. The guides were knowledgeable and friendly, making the experience even better. Everything was seamless, from booking to the journey. Highly recommended for a stress-free vacation!"</p>
//       </div>

//       {/* Testimomonial section  */}
//       <slider {...settings}>
//       {TestimonialData.map(({ id, name, text, image }) => (
//   <div key={id} className='my-6'>
//     <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-blue-100/10 relative'>
//       <img className='rounded-full block mx-auto w-20 h-20 object-cover' src={image} alt={name} />
//       <h1 className='text-xl font-bold'>{name}</h1>
//       <p className='text-gray-500 text-sm'>{text}</p>
//       <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
//     </div>
//   </div>
// ))}
//   )
//       })}
//       </slider>

//       </div>
//     </div>
//   )
// }

// export default Testimonial
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../public/img1.jpg";
import Img2 from "../../public/img2.jpg";
import Img3 from "../../public/img3.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore odio esse.",
    image: Img1,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore odio esse.",
    image: Img2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque labore odio esse.",
    image: Img3,
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-800' data-aos="fade-up" data-aos-duration="2000">
            Testimonial
          </h1>
          <p className='text-center mx-auto pt-[20px] cursor-pointer text-gray-600'data-aos="fade-up" data-aos-duration="2000">
            "Our trip was absolutely amazing! The itinerary was well-planned, and the accommodations were top-notch. The guides were knowledgeable and friendly, making the experience even better. Everything was seamless, from booking to the journey. Highly recommended for a stress-free vacation!"
          </p>
        </div>

        {/* Testimonial section */}
        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, image }) => (
            <div key={id} className='my-6 cursor-pointer' data-aos="zoom-in" data-aos-duration="2000">
              <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-blue-400/10 relative'>
                <img className='rounded-full block mx-auto w-20 h-20 object-cover' src={image} alt={name} />
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-gray-500 text-sm'>{text}</p>
                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default Testimonial;

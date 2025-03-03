import React from 'react'
import Location from '../Components/Location'

const About = () => {
  return (
    <div className='container pt-14 px-[50px]'>
      <div className='py-10'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='my-8 border-l-8 border-blue-600/50 py-2  text-3xl font-bold pl-2 text-gray-60'>About Us</h1>
        <p className='text-blue-600 text-xl font-semibold'data-aos="fade-up" data-aos-duration="2000">Welcome to Our Website, your trusted travel partner dedicated to creating unforgettable experiences around the world. With a passion for exploration and a commitment to excellence, we specialize in curating personalized tours, adventure trips, and luxury getaways tailored to your dreams.</p>
        <br />
        <ul className='text-lg py-5'>
          <li className='py-2'data-aos="fade-up" data-aos-duration="1000"><span> &#11162;</span><span className='font-semibold'>  Expertly Crafted Itineraries –</span>  We design tours that balance adventure, relaxation, and cultural immersion.</li>
          <li className='py-5'data-aos="fade-up" data-aos-duration="1000"><span> &#11162;</span><span className='font-semibold'>  Personalized Service –</span> Our team ensures every trip is tailored to your preferences.</li>
          <li className='py-2'data-aos="fade-up" data-aos-duration="1000"><span> &#11162;</span><span className='font-semibold'>  Trusted Travel Partners – </span> We work with top-rated hotels, airlines, and local guides for a seamless experience.</li>
          <li className='py-5'data-aos="fade-up" data-aos-duration="1000"><span> &#11162;</span> <span className='font-semibold'>  24/7 Support – </span> Travel with confidence knowing we’re always here to assist you.</li>
          <p className='font-semibold pt-2'data-aos="fade-up" data-aos-duration="1000"><span> &#11162;</span>  Explore. Experience. Enjoy</p>
        </ul>
      </div>
      <Location/>
    </div>
  )
}

export default About

import React from 'react'
import FooterLogo from '../../public/logo.png';
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaMobileAlt, FaTwitter } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const FooterLinks =[
  {
    title:"Home",
    link :"/Home",
  },
  {
    title:"About",
    link :"/About",
  },
  {
    title:"Best Place",
    link :"/Places",
  },
  {
    title:"Blogs",
    link :"/Blogs",
  },
];

const Footer = () => {
  return (
    <div className='py-5 border-2 border-blue-500 m-5'>
      <div className='container  px-[50px]'>
        <div className='grid  md:grid-cols-3 py-5 bg:white/80 '>
            <div className='py-4 px-4'>
              <h1 className='flex items-center gap-3  text-xl sm:text-3xl font-bold  text-justify sm:test-left'>
                <img className='cursor-pointer' src={FooterLogo} alt="" />
              </h1>
              <p className='text-sm cursor-pointer'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laborum ut eligendi, doloribus voluptas vero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat obcaecati dolore debitis sequi vero!
              </p>
              <br />
              <div className='flex items-center gap-3 mt-3 cursor-pointer'>
                <FaMapLocation/>
                <p>Ahmedabad, Gujarat</p>
              </div>
              <div className='flex items-center gap-3 mt-3 cursor-pointer'>
                <FaMobileAlt/>
                <p>+123 456 789</p>
              </div>

            {/* social media icon  */}
            <div>
                <div className='flex items-center gap-3 mt-6 cursor-pointer'>
                  <FaFacebook className='text-3xl text-blue-600' />
                  <FaInstagram className='text-3xl text-red-500'/>
                  <FaTwitter className='text-3xl text-blue-600'/>

                  </div>              
            </div>
            </div>
            {/* link  */}
            <div className='grid grid-cols-2 sm:grid-cols-3  col-span-2 md:pl-10'> 
                {/* first col link  */}
              <div>
                <div className='py-8 px-4 '>
                  <h1>Important Links</h1>
                  <ul>
                    {
                      FooterLinks.map(({title,link })=>(
                        <li className='cursor-pointer  hover:translate-x-1 duration-300 hover:!text-blue-500 space-x-1 text-gray-700 py-4'>
                          <Link to={link} onClick={()=>{window.scrollTo(0,0)}}>
                            <span> &#11162;</span>
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
                {/* second col link  */}
                <div>
                <div className='py-8 px-4 '>
                  <h1>Important Links</h1>
                  <ul>
                    {
                      FooterLinks.map(({title,link })=>(
                        <li className='cursor-pointer  hover:translate-x-1 duration-300 hover:!text-blue-500 space-x-3 text-gray-700 py-4'>
                          <Link to={link} onClick={()=>{window.scrollTo(0,0)}}>
                            <span> &#11162;</span>
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
                {/* third col link  */}
                <div>
                <div className='py-8 px-4 '>
                  <h1>Important Links</h1>
                  <ul>
                    {
                      FooterLinks.map(({title,link })=>(
                        <li className='cursor-pointer  hover:translate-x-1 duration-300 hover:!text-blue-500 space-x-1 text-gray-700 py-4'>
                          <Link to={link} onClick={()=>{window.scrollTo(0,0)}}>
                            <span> &#11162;</span>
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
        </div>

         {/* copyright  */}
            <div className='bg-blue-500 py-2 text-white text-lg'>
              <div className='text-center'>
              &copy; copyright 2025 All rights reserved || Kashyap Patel 
              </div>
            </div>
      </div>
    </div>
  )
}

export default Footer

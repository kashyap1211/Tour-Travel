import React, { useState } from 'react'

const Hero = () => {

  const [pricevalue ,setPricevalue]=useState(50000);

  return (
    <div className='bg-black/20 h-full '>
        <div className='h-full flex  justify-center lg:px-[150px] items-center p-4 bg-primary/10 '>
            <div className='container grid grid-cols-1 gap-4'>
                {/* text containt  */}
                <div className='text-white'>
                    <p data-aos="fade-up" data-aos-duration="2000">Our Packages</p>
                    <p data-aos="fade-up" data-aos-duration="3000" className='font-bold text-3xl '>Search Your Destination</p>
                </div>
                {/* form section  */}
                <div className='space-y-4 bg-white rounded-md p-4 relative' data-aos="zoom-in" data-aos-duration="2000">
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 py-3'>
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <label htmlFor='destination' className='opacity-70'>Search Your Destination</label>
                            <input type="text" name='destination' id='destination' placeholder='Dubai' className='w-full bg-gray-200 my-2 range accent-blue-500 outline-blue-500 focus:outline-blue-500 outline-0 rounded-full p-2 hover:outline-1'/>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000">
                        <label htmlFor='destination' className='opacity-70'>Date</label>
                        <input type="date" name='destination' id='destination' className='w-full  bg-gray-200 my-2  focus:outline-blue-500 outline-0 outline-blue-500 focus:outline hover:outline-1  rounded-full p-2'/>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <label htmlFor="destination" className='opacity-70 block'>
                                <div className='w-full flex justify-between item-center'>
                                    <p>Max Price</p>
                                    <p className='font-bold text-xl'>{pricevalue}</p>
                                </div>
                            </label>
                            <div className='bg-gray-200 rounded-full outline-0  p-2 flex item-center justify-center hover:outline-1 outline-blue-500'>
                            <input type="range" name='destination' id='destination'  className='appearance-none bg-gradient-to-r from-blue-100 to-gray-500 h-2  w-full  bg-gray-100 my-1 rounded-full p-2' min="1500" max="150000" value={pricevalue} step="10" onChange={(e) => setPricevalue(e.target.value)}/>
                        
                            </div>
                        </div>
                    </div>
                    {/* button  */}
            <button className='bg-gradient-to-r from-blue-300 to-blue-800 text-white hover:scale-110 cursor-pointer px-4 py-2 rounded-full duration-500 absolute -bottom-5 left-1/2 -translate-x-1/2' data-aos="fade-up" data-aos-duration="2000">
                Search Now
            </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

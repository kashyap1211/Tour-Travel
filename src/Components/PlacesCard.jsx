import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

const PlacesCard = ({img, title, location, description, price, type ,handleOrderPopup,}) => {
  return (
    <div className='bg-gray-100  shadow-xl transition-all duration-500  rounded-md hover:bg-gray-200 hover:text-white-500 cursor-pointer text-blue-900' data-aos="zoom-in"data-aos-duration="1000" onClick={handleOrderPopup}>
        <div className='overflow-hidden'>
            <img src={img} alt="" className='mx-auto rounded-md h-[220px] w-full object-cover transition duration-700 hover:scale-110' />
        </div>
        <div className='space-y-2 p-3'>
            <h1 className='line-clamp-1 font-bold text-xl' data-aos="fade-up" data-aos-duration="2000">
                {title}
            </h1>
            <div className='flex items-center gap-2 opacity-70 text-gray-900' data-aos="fade-up" data-aos-duration="2000">
                <IoLocationSharp/><span>{location}</span>
            </div>
            <p className='line-clamp-2'data-aos="fade-up" data-aos-duration="2000">{description}</p>
        </div>
        <div>
            
            <div className='flex item-center justify-between p-2 border-t-2 y-3 !mt-3'>
                <div className='opacity-70 text-gray-900'data-aos="fade-up" data-aos-duration="2000">
                    <p>{type}</p>
                </div>  
                <div className='space-y-2 p-3'data-aos="fade-up" data-aos-duration="2000">
                    <p className='text-2xl font-bold'>{price}</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default PlacesCard

import React from 'react'

const Banner = ({img}) => {

    const bgImg = {
        backgroundImage: `url(${img})`,
        backgroundSize:"cover",
        backgroundPosition :"center",
        height:"400px",
    }

  return (
    <div data-aos="zoom-in" className='h-[50vh] w-full' style={bgImg}>
        
    </div>
  )
}

export default Banner

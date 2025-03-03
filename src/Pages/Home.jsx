import React, { useState } from 'react'
import BackgroundVid from './assets/Tour_Background.mp4'
import Hero from "../Components/Hero"
import Places from '../Components/Places'
import Banner from '../Components/Banner'
import Testimomonial from '../Components/Testimomonial'
import BannerPhoto from './assets/BannerPhoto.jpg'
import BannerPhoto2 from './assets/BannerthreePhoto2.avif'
import Blogs from '../Pages/Blogs'
import Bannertwo from '../Components/Bannertwo'
import Popup from '../Components/Popup'


const Home = () => {

  const [orderPopup, setOrderPopup] = useState(false);


  const handleOrderPopup =() =>{ 
    setOrderPopup (!orderPopup);
  };
  return (
    <>
      <div>
        <div className='relative h-[700px]'>
          <video autoPlay loop muted  className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
            <source src={BackgroundVid} />
          </video>
          <Hero/>
        </div>
        <Places handleOrderPopup={handleOrderPopup}/>
        <Banner img={BannerPhoto}/>
        <Blogs/>
        <Bannertwo />
        <Banner img={BannerPhoto2}/>
        <Testimomonial/>
        <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
        
      </div>
    </>
  )
}

export default Home

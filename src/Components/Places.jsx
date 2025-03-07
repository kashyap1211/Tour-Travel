import React from 'react'
import Img1 from "../../public/usa.jpg"
import Img2 from "../../public/newyork.jpg"
import Img3 from "../../public/eastcoast.jpg"
import Img4 from "../../public/toronto.jpg"
import Img5 from "../../public/SouthFrance.webp"
import Img6 from "../../public/Thialend.jpg"
import Img7 from "../../public/Asutralia.jpg"
import Img8 from "../../public/Maldvish.jpg"
import Img9 from "../../public/bali.webp"
import Img10 from "../../public/gujarat.jpg"
import Img11 from "../../public/Kashmir.webp"
import Img12 from "../../public/shimla.jpg"
import Img13 from "../../public/leh.jpg"
import Img14 from "../../public/sikkim.webp"
import Img15 from "../../public/bali.webp"

import PlacesCard from './PlacesCard'

const PlacesData = [
    {
        img: Img1,
        title: "West USA",
        location: "USA",
        description: "Explore the stunning landscapes of the Grand Canyon, vibrant Las Vegas, and the beautiful coasts of California.",
        price: "Rs.1.2Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img2,
        title: "Grand Bargain America",
        location: "New York, USA",
        description: "Experience the bustling streets of New York, from Times Square to the Statue of Liberty, and enjoy world-class entertainment.",
        price: "Rs.1.5Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img3,
        title: "Canada East Coast",
        location: "Canada",
        description: "Discover the charm of Canada's East Coast, including Toronto, Montreal, and the stunning Niagara Falls.",
        price: "Rs.1.1Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img4,
        title: "Toronto City Tour",
        location: "Canada",
        description: "Enjoy a guided tour of Toronto’s landmarks, including the CN Tower, Royal Ontario Museum, and scenic waterfront.",
        price: "Rs.1Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img5,
        title: "Southern France",
        location: "France",
        description: "Experience the charm of the French Riviera, from Nice to Marseille, with breathtaking Mediterranean views.",
        price: "Rs.1.6Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img6,
        title: "Thailand - Pattaya",
        location: "Thailand",
        description: "Relax on Pattaya’s stunning beaches, enjoy vibrant nightlife, and explore floating markets and ancient temples.",
        price: "Rs.50k",
        type: "Cultural Relax",
    },
    {
        img: Img7,
        title: "Australia Packages",
        location: "Australia",
        description: "Explore Sydney’s Opera House, the Great Barrier Reef, and the vast Outback in this unforgettable Australian adventure.",
        price: "Rs.1.3Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img8,
        title: "Maldives Tour",
        location: "Maldives",
        description: "Escape to paradise with crystal-clear waters, luxury overwater bungalows, and pristine white-sand beaches.",
        price: "Rs.1Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img9,
        title: "Bali Tour",
        location: "Bali, Indonesia",
        description: "Discover Bali’s lush landscapes, sacred temples, and beautiful beaches, perfect for adventure and relaxation.",
        price: "Rs.70k",
        type: "Cultural Relax",
    },
    {
        img: Img10,
        title: "Gujarat Packages",
        location: "India",
        description: "Explore Gujarat’s rich culture, from the stunning Rann of Kutch to the magnificent Gir National Park and Somnath Temple.",
        price: "Rs.1.3Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img11,
        title: "Kashmir Tour",
        location: "India",
        description: "Experience the breathtaking beauty of Kashmir, with its snow-capped mountains, houseboats on Dal Lake, and scenic valleys.",
        price: "Rs.1Lakh",
        type: "Cultural Relax",
    },
    {
        img: Img12,
        title: "Shimla Manali Tour",
        location: "India",
        description: "Enjoy the serene beauty of Himachal Pradesh with scenic hill stations, adventure sports, and breathtaking views.",
        price: "Rs.70k",
        type: "Cultural Relax",
    },
    {
        img: Img13,
        title: "Leh Ladakh",
        location: "India",
        description: "Embark on a thrilling journey through Ladakh’s high-altitude deserts, monasteries, and scenic mountain passes.",
        price: "Rs.60k",
        type: "Cultural Relax",
    },
    {
        img: Img14,
        title: "Sikkim",
        location: "India",
        description: "Discover the serene beauty of Sikkim with its monasteries, waterfalls, and stunning Himalayan landscapes.",
        price: "Rs.80k",
        type: "Cultural Relax",
    },
    {
        img: Img15,
        title: "Royal Himachal Tour",
        location: "India",
        description: "Travel through the picturesque valleys of Himachal Pradesh, exploring Shimla, Manali, and Dharamshala.",
        price: "Rs.70k",
        type: "Cultural Relax",
    },
]

const Places = ({handleOrderPopup}) => {
  return (
    <div className='py-10 lg:px-[35px] px-[10px]'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-blue-500/50 py-2 pl-2 text-3xl font-bold' data-aos="fade-right" data-aos-duration="2000">Best Places to Visit</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 '>
            {
                PlacesData.map((item,index)=>(
                    <PlacesCard
                    handleOrderPopup={handleOrderPopup}
                    key={index}{...item}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Places

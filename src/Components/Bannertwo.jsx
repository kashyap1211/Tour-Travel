import React from "react";
import TravelImg from "../../public/BannertwoPhoto.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Bannertwo = () => {
  return (
    <div className="min-h-[400px] py-[10px] lg:pt-[50px]">
      <div className="min-h-[400px] flex  justify-center item-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* image section  */}
            <div>
              <img
                className="lg:max-w-[450px] max-w-[280px] max-md-[380] md:h-[300px] lg:h-[350px] h-[200px] w-full mx-auto  border-b-3 border-indigo-500 "
                data-aos="zoom-in"
                data-aos-duration="2000"
                src={TravelImg}
                alt="Travel"
              />
            </div>
            {/* text content section  */}
            <div className=" px-[20px]">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl font-bold sm:text-4xl"
              >
                Explore all corners of the world with us
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-sm text-gray-600 tracking-wide leading-8 "
              >
                Discover the world with us! From breathtaking landscapes to vibrant cities, we offer unforgettable tours, hassle-free travel, and personalized experiences. Let us plan your dream getaway, ensuring adventure, comfort, and memories that last a lifetime. Start exploring today!
              </p>
                <div data-aos-duration="2000" data-aos="zoom-in"  className="grid grid-cols-2 gap-6 pt-[5px]">
                <div className="space-y-8 ">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-500 text-white " />
                    <p>Flight</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100 bg-blue-500 text-white " />
                    <p>Hotel</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100 bg-blue-500 text-white " />
                    <p>Wi-Fi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100 bg-blue-500 text-white " />
                    <p>Foods</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannertwo;

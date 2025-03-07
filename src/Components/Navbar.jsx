import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/logo.png"; 
import { FaCaretDown } from "react-icons/fa6";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsivMenu";

const dropdownLinks = [
  { name: "Our Services", link: "/Service" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/Location" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
        <div className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex place-content-around">
              <p>20% Off On Next Booking</p>
              <p>Mobile No. +91 00000-00000</p>
            </div>
          </div>
        </div>
        <div className="container  py-3 sm:py-0 lg:px-[70px]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex place-content-around">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="Logo" className="h-16" />
              </Link>
            </div>

            {/* Navbar */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>

                {/* Dropdown */}
                <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown flex group items-center">
                    <span>Quick link</span>
                    <span>
                      <FaCaretDown className="transition-all inline-block duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a className="inline-block w-full rounded-md p-2 hover:bg-blue-400" href={data.link}>
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center gap-4 pe-2">
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 duration-600 text-white hover:scale-110 cursor-pointer px-3 py-1 rounded-full"
                onClick={() => handleOrderPopup()}
              >
                Inquiry Now
              </button>

              {/* Mobile Hamburger */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className="transition-all cursor-pointer" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="transition-all cursor-pointer" size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;

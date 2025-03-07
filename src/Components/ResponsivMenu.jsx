import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
const navbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Blogs",
        link: "/blogs",
    },
    {
        name: "Best Places",
        link: "/places",
    },
];

const ResponsivMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} 
            fixed bottom-0 top-0 z-20 bg-blue-600 text-white 
            px-8 pb-6 pt-16 transition-all duration-500 
            md:hidden rounded-r-xl shadow-md w-64`}>
            
            {/* Close Button */}
            <button 
                >
                <IoMdCloseCircleOutline onClick={() => setShowMenu(false)} 
                className="absolute top-4 right-4 text-white text-4xl" />
            </button>


            {/* Navigation Links */}
            <nav className="mt-10">
                {navbarLinks.map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        className="block py-2 text-lg hover:text-gray-400"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default ResponsivMenu;

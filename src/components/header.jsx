import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import logo_white from "../images/logo/logo-white.webp";
import { Submenu } from "../Data/index";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Header = () => {
    const [hoveredKey, setHoveredKey] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState('');
    let leaveTimeout;
    const handleMouseEnter = (key) => {
        clearTimeout(leaveTimeout); // Clear any pending timeout to avoid hiding unexpectedly
        setHoveredKey(key);
        const selectedSubmenu = Submenu[key];
        setIsActiveMenu(selectedSubmenu.items && selectedSubmenu.items.length > 0);
    };

    const handleMouseLeave = () => {
        leaveTimeout = setTimeout(() => {
            setHoveredKey(null);
        }, 200);
    };


    return (
        <div className="nav_wrapper z-20">
            <div className="nav_bar_top z-50"></div>
            <nav className="top-0 nav_bar_wrap bg-blue-800  shadow-lg z-40 ">
                <div className="nav_bar_content flex justify-between px-4 md:px-16 lg:px-8 xl:px-32 2xl:px-14 items-center relative ">
                    <div className="flex z-50">
                        <img src={logo_white} className="w-15 h-12 cursor-pointer" alt="Logo" onClick={()=>(window.location.href="/")} />
                        <ul className={`lg:flex space-x-4 hidden ${isMenuOpen  ? 'block' : 'hidden'} ml-12 mt-2 absolute md:static left-0 top-full w-full md:w-auto bg-blue-800 md:bg-transparent`}>
                            {Object.keys(Submenu).map((key, index) => {
                                const submenu = Submenu[key];
                                const isActive = window.location.pathname === submenu.link;
                                return(
                                    <li
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(key)}
                                        onMouseLeave={handleMouseLeave}
                                        className={`hover:text-themeYellow px-0 sm:px-0 md:px-0 lg:px-0 xl:px-1 nav-item  relative group cursor-pointer ml-4 py-2 md:py-0 text-center text-white ${isActive  ? ' active' : ''}`}
                                        onClick={submenu.items.length === 0 ? () => (window.location.href = submenu.link) : () => {}}
                                    >
                                        {submenu.name || key}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                    <div className="hidden lg:flex space-x-4 z-50 ">
                        <button className="nav_bar_register-btn b px-2 py-4" onClick={()=> (window.location.href="https://www.top11india.com/register")}>Register</button>
                        <button className="border border-themeYellow text-themeYellow rounded-2xl  p-2 w-24 leading-4 tracking-wide hover:bg-themeYellow hover:text-themeBlue" onClick={()=> (window.location.href="https://www.top11india.com/register")}>Login</button>
                    </div>

                    <AnimatePresence mode="wait">
                        {hoveredKey && isActiveMenu === true && (

                            <motion.div
                                key={hoveredKey}
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-0 mt-[-5px]"
                                initial={{y: '-20%', opacity: 0, height: 'auto'}}
                                animate={{y: '0%', opacity: 1, height: 'auto'}}
                                exit={{y: '10%', opacity: 0, height: 'auto'}}
                                transition={{
                                    y: {type: 'tween', duration: 0.2, ease: 'easeInOut'},
                                    opacity: {duration: 0.2, ease: 'easeInOut'},
                                    delay: 0.1
                                }}
                                onMouseEnter={() => handleMouseEnter(hoveredKey)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    className={`container mx-auto flex ${
                                        Submenu[hoveredKey]?.items?.length > 3 ? 'justify-around' : 'justify-center gap-18'
                                    }`}
                                >
                                    {Submenu[hoveredKey].items?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center hover_active_menu">
                                            <motion.img
                                                src={submenuItem.image}
                                                onClick={() => (window.location.href = submenuItem.link)}
                                                alt={submenuItem.name}
                                                className={`h-42 w-42 py-2 mx-auto cursor-pointer hover:scale-100 ${
                                                    Submenu[hoveredKey]?.items?.length > 3 ? 'px-2' : 'px-12'
                                                }`}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: submenuIndex * 0.1,  // Staggered delay for smooth effect
                                                    ease: "linear",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>


                            </motion.div>
                            )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
);
};

export default Header;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For hamburger icon
import logo_white from "../images/logo/logo-white.webp";
import { Submenu } from "../schema/index";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

import image1 from '../images/games/game1.webp';
import image2 from '../images/games/game2.png';
import image3 from '../images/games/game3.png';
import image4 from '../images/games/game4.png';


const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [prevMenu, setPrevMenu] = useState(null);

    useEffect(() => {
        if (prevMenu) {
            const id = setTimeout(() => setPrevMenu(null), 200);
            return () => clearTimeout(id);
        }
    }, [prevMenu]);

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutId);
        if (menu !== activeMenu) {
            setPrevMenu(activeMenu);
            setActiveMenu(menu);
        }
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setActiveMenu(null);
            setPrevMenu(null);
        }, 200);
        setTimeoutId(id);
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setSelectedMenu(null);
    };

    const handleMenuItemClick = (item) => {
        setSelectedMenu(item);
    };


    return (
        <div className="nav_wrapper z-20">
            <div className="nav_bar_top"></div>
            <nav className="top-0 nav_bar_wrap bg-blue-800  shadow-lg">
                <div className="nav_bar_content flex justify-between px-4 md:px-16 lg:px-8 xl:px-32 2xl:px-14 items-center relative z-40">
                    <div className="flex">
                        <img src={logo_white} className="w-15 h-12" alt="Logo" />
                        <ul className={`lg:flex space-x-4 hidden ${isMenuOpen ? 'block' : 'hidden'} ml-12 mt-2 absolute md:static left-0 top-full w-full md:w-auto bg-blue-800 md:bg-transparent`}>
                            {Object.keys(Submenu).map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative group cursor-pointer ml-4 py-2 md:py-0 text-center text-white"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMobileMenu}>
                            {isMenuOpen ? <FaTimes className="text-white text-2xl" /> :
                                <FaBars className="text-white text-2xl" />}
                        </button>
                    </div>

                    {/* Menu items - hidden on mobile */}


                    <div className="hidden lg:flex space-x-4">
                        <button className="nav_bar_register-btn px-2 py-2">Sign Up / Sign In</button>
                    </div>

                    <AnimatePresence mode="wait">
                        {prevMenu && (
                            <motion.div
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-70"
                                initial={{ opacity: 1, height: 'auto' }}
                                animate={{ opacity: 1, zIndex: 100 }}
                                exit={{ opacity: 1, height: 0 }}
                                transition={{ duration: 2 }}
                            >
                                <div className="container mx-auto flex justify-around">
                                    {Submenu[prevMenu]?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center text-white mt-2">
                                            <motion.img
                                                src={submenuItem.image}
                                                alt={submenuItem.name}
                                                className="h-32 w-32 mx-auto"
                                                initial={{ opacity: 0.5 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ duration: 0.8 }}
                                            />
                                            <p>{submenuItem.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeMenu && (
                            <motion.div
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg"
                                initial={{ opacity: 1, height: 0 }}
                                animate={{ opacity: 1, height: 'auto', minHeight: '200px' }}
                                exit={{ opacity: 0, height: 0 }}
                                onMouseEnter={() => clearTimeout(timeoutId)}
                                onMouseLeave={handleMouseLeave}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="container mx-auto flex justify-around">
                                    {Submenu[activeMenu]?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center text-white mt-2">
                                            <motion.img
                                                src={submenuItem.image}
                                                alt={submenuItem.name}
                                                className="h-32 w-32 mx-auto"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                            <p>{submenuItem.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-opacity-95 grid grid-cols-1 md:grid-cols-3"
                            >
                                <div className="nav_bar_tablet_nav_item_wrapper hidden md:block opacity-80">
                                </div>
                                <div
                                    className="nav_bar_tablet_nav_link_wrapper md:col-span-2 flex flex-col overflow-y-scroll  space-y-8 z-50">

                                    <div
                                        className="lg:flex md:flex bg-themeBlue h-20 px-6 float-end  w-full flex justify-between">
                                        <img src={logo_white} className="mt-2 w-28 h-16" />
                                        <button onClick={toggleMobileMenu} className="justify-end">
                                            {isMenuOpen ?
                                                <FaTimes className="float-end text-2xl text-end text-themeYellow" /> :
                                                <FaBars className="text-white text-2xl text-end" />}
                                        </button>
                                    </div>
                                    <ul className="flex flex-col items-center space-y-6  text-2xl px-6">
                                        {Object.keys(Submenu).map((item, index) => (
                                            <li key={index} className="cursor-pointer w-full">
                                                <div className="flex items-center justify-between w-full"
                                                    onClick={() => handleMenuItemClick(item)}>
                                                    <span
                                                        className={`cursor-pointer ${selectedMenu === item ? 'font-bold' : ''}`}>
                                                        {item}
                                                    </span>

                                                    {selectedMenu === item ? (
                                                        <FaChevronUp
                                                            className="ml-2 cursor-pointer"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleMenuItemClick(null);
                                                            }}
                                                        />
                                                    ) : (
                                                        <FaChevronDown className="ml-2 cursor-pointer" />
                                                    )}
                                                </div>

                                                {selectedMenu === item && (
                                                    <div className="flex items-center justify-center py-4 w-100">

                                                        <Swiper
                                                            slidesPerView={2.5}
                                                            grabCursor={true}
                                                            centeredSlides={true}
                                                            spaceBetween={5}
                                                            freeMode={true}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            modules={[FreeMode]}
                                                            className="mySwiper"
                                                        >
                                                            {[image1, image2, image3, image4].map((image, index) => (
                                                                <SwiperSlide key={index}>
                                                                    <img
                                                                        src={image}
                                                                        alt={`Slide ${index + 1}`}
                                                                        className="w-full h-full object-cover rounded-lg" // Tailwind for full width, height, and border radius
                                                                        style={{ borderRadius: '8px' }} // Additional inline style option if needed
                                                                    />
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                    </div>
                                                )}

                                            </li>


                                        ))}
                                    </ul>
                                    <div className="flex w-full px-6 gap-2 py-6">
                                        <button
                                            className="bg-themeBlue text-themeYellow px-6 py-3 rounded text-lg w-1/2"
                                        >
                                            Register
                                        </button>
                                        <button
                                            className="bg-transparent border-themeBlue border-2 px-6 py-3 rounded text-lg w-1/2"
                                        >
                                            Login
                                        </button>
                                    </div>
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
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon
import logo_white from "../images/logo/logo--black.png";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutId);
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setActiveMenu(null);
        }, 200);
        setTimeoutId(id);
    };

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const submenus = {
        Popular: ['Game 1', 'Game 2', 'Game 3'],
        'Physical Education': ['Sport 1', 'Sport 2', 'Sport 3'],
        'Real Man': ['Real Man Game 1', 'Real Man Game 2'],
        Electronic: ['Electronic Game 1', 'Electronic Game 2'],
        'Lottery Ticket': ['Lottery 1', 'Lottery 2', 'Lottery 3'],
        'Chess Board': ['Chess 1', 'Chess 2'],
        Fishing: ['Fishing 1', 'Fishing 2'],
    };

    return (
        <div className="nav_wrapper">
            <div className="nav_bar_top"></div>
            <nav className="top-0 nav_bar_wrap bg-blue-800  shadow-lg">
                <div className="nav_bar_content flex justify-between px-4 md:px-16 items-center relative z-40">
                    <div className="flex">
                        <img src={logo_white} className="w-15 h-10" alt="Logo"/>
                        <ul className={`lg:flex space-x-4 hidden ${isMenuOpen ? 'block' : 'hidden'} ml-12 mt-2 absolute md:static left-0 top-full w-full md:w-auto bg-blue-800 md:bg-transparent`}>
                            {['Popular', 'Physical Education', 'Real Man', 'Electronic', 'Lottery Ticket', 'Chess Board', 'Fishing'].map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative group cursor-pointer py-2 md:py-0 text-center text-white"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMobileMenu}>
                            {isMenuOpen ? <FaTimes className="text-white text-2xl"/> :
                                <FaBars className="text-white text-2xl"/>}
                        </button>
                    </div>

                    {/* Menu items - hidden on mobile */}


                    <div className="hidden lg:flex space-x-4">
                        <button className="nav_bar_register-btn px-2 py-2">Sign Up</button>
                        <button className="nav_bar_login-btn px-2 py-2">Sign In </button>
                    </div>

                    <AnimatePresence>
                        {activeMenu && (
                            <motion.div
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.6, -0.05, 0.01, 0.99],
                                }}
                                className="absolute left-0 top-full w-full bg-blue-900 py-4 shadow-lg"
                                onMouseEnter={() => clearTimeout(timeoutId)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="container mx-auto flex justify-around">
                                    {submenus[activeMenu]?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center text-white">
                                            <img src={`/path-to-image${submenuIndex}`} alt={submenuItem}
                                                 className="h-12 w-12 mx-auto"/>
                                            <p>{submenuItem}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {isMenuOpen && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                                className="fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-50"
                            >
                                <div className="lg:hidden float-end">
                                    <button onClick={toggleMobileMenu}>
                                        {isMenuOpen ? <FaTimes className="text-white text-2xl"/> :
                                            <FaBars className="text-white text-2xl"/>}
                                    </button>
                                </div>
                                <ul className="flex flex-col items-center space-y-6 text-white text-2xl">
                                    {['Popular', 'Physical Education', 'Real Man', 'Electronic', 'Lottery Ticket', 'Chess Board', 'Fishing'].map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={toggleMobileMenu} // Close menu on item click
                                            className="cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col space-y-4">
                                    <button className="bg-blue-500 px-6 py-3 rounded text-white text-lg">Registered
                                    </button>
                                    <button className="bg-blue-500 px-6 py-3 rounded text-white text-lg">Live in
                                    </button>
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
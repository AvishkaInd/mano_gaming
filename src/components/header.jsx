import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon
import logo_white from "../images/logo/logo-white.webp";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
    const [selectedMenu, setSelectedMenu] = useState(null);

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
        setSelectedMenu(null);
    };

    const handleMenuItemClick = (item) => {
        setSelectedMenu(item); // Update selected menu
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
                        <img src={logo_white} className="w-15 h-12" alt="Logo"/>
                        <ul className={`lg:flex space-x-4 hidden ${isMenuOpen ? 'block' : 'hidden'} ml-12 mt-2 absolute md:static left-0 top-full w-full md:w-auto bg-blue-800 md:bg-transparent`}>
                            {['Popular', 'Physical Education', 'Real Man', 'Electronic', 'Lottery Ticket', 'Chess Board', 'Fishing'].map((item, index) => (
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
                            {isMenuOpen ? <FaTimes className="text-white text-2xl"/> :
                                <FaBars className="text-white text-2xl"/>}
                        </button>
                    </div>

                    {/* Menu items - hidden on mobile */}


                    <div className="hidden lg:flex space-x-4">
                        <button className="nav_bar_register-btn px-2 py-2">Sign Up</button>
                        <button className="nav_bar_login-btn px-2 py-2">Sign In </button>
                    </div>

                    <AnimatePresence  mode="wait">
                        {activeMenu && (
                            <motion.div
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg"
                                initial={{opacity: 1, height: 0}}
                                animate={{opacity: 1, height: 'auto', minHeight: '200px'}}
                                exit={{opacity: 1, height: 0}} // Collapse height to 0 on exit
                                onMouseEnter={() => clearTimeout(timeoutId)}
                                onMouseLeave={handleMouseLeave}
                                transition={{
                                    duration: 0.3, // Set the duration for enter and exit animations
                                }}
                            >
                                <div className="container mx-auto flex justify-around">
                                    {submenus[activeMenu]?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center text-white">
                                            <motion.img
                                                src={`/path-to-image${submenuIndex}`}
                                                alt={submenuItem}
                                                className="h-12 w-12 mx-auto"
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{duration: 0.8}}
                                            />
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
                                className="fixed inset-0 bg-blue-900 bg-opacity-95 grid grid-cols-1 md:grid-cols-2"
                            >
                               <div className="nav_bar_tablet_nav_item_wrapper">

                                   {selectedMenu && (
                                       <div className="submenu">
                                           <h2 className="text-2xl">{selectedMenu} Submenu</h2>
                                           <ul>
                                               {submenus[selectedMenu].map((game, index) => (
                                                   <li key={index} className="text-lg">
                                                       {game}
                                                   </li>
                                               ))}
                                           </ul>
                                       </div>
                                   )}

                               </div>
                                <div
                                    className="nav_bar_tablet_nav_link_wrapper p-4 flex flex-col  space-y-8 z-50">

                                    <div className="lg:hidden float-end">
                                        <button onClick={toggleMobileMenu}>
                                            {isMenuOpen ? <FaTimes className="float-end text-2xl"/> :
                                                <FaBars className="text-white text-2xl"/>}
                                        </button>
                                    </div>
                                    <ul className="flex flex-col items-center space-y-6  text-2xl">
                                        {['Popular', 'Physical Education', 'Real Man', 'Electronic', 'Lottery Ticket', 'Chess Board', 'Fishing'].map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleMenuItemClick(item)}
                                                className="cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className=" grid grid-cols-1 space-y-4">
                                        <button className="bg-themeBlue text-themeYellow px-6 py-3 rounded  text-lg">Register
                                        </button>
                                        <button className="bg-transparent border-themeBlue border-2 px-6 py-3 rounded  text-lg">Login
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
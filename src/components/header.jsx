import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon
import logo_white from "../images/logo/logo-white.webp";
import { Submenu } from "../schema/index";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [prevMenu, setPrevMenu] = useState(null);

    useEffect(() => {
        // Reset `prevMenu` after a delay to avoid visual conflict
        if (prevMenu) {
            const id = setTimeout(() => setPrevMenu(null), 200);
            return () => clearTimeout(id);
        }
    }, [prevMenu]);

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutId);
        if (menu !== activeMenu) {
            setPrevMenu(activeMenu); // Set prevMenu to the current activeMenu
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
        <div className="nav_wrapper z-20">
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
                        {prevMenu && (
                            <motion.div
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-70"
                                initial={{ opacity: 1, height: 'auto' }}
                                animate={{ opacity: 1,zIndex:100}}
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
                        {activeMenu &&  (
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
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                                className="fixed inset-0 bg-blue-900 bg-opacity-95 grid grid-cols-1 md:grid-cols-2"
                            >
                               <div className="nav_bar_tablet_nav_item_wrapper hidden md:block">

                                   {selectedMenu && (
                                       <div className="submenu">
                                           <h2 className="text-2xl">{selectedMenu} Submenu</h2>
                                           <ul className="grid grid-cols-1 md:grid-cols-2 px-2 ml-6">
                                               {Submenu[selectedMenu].map((game, index) => (
                                                   <li
                                                       key={index}
                                                       className="overflow-y-scroll w-40 h-40 p-4 text-themeYellow shadow-md text-center text-lg bg-transparent flex items-center justify-center"
                                                   >
                                                       <motion.img
                                                           src={game.image}
                                                           alt={game.name}
                                                           className="h-38 w-38 mx-auto"
                                                           initial={{opacity: 0}}
                                                           animate={{opacity: 1}}
                                                           transition={{duration: 0.5}}
                                                       />
                                                   </li>
                                               ))}
                                           </ul>
                                       </div>
                                   )}
                               </div>
                                <div
                                    className="nav_bar_tablet_nav_link_wrapper p-4 flex flex-col overflow-y-scroll md:overflow-y-hidden space-y-8 z-50">

                                    <div className="lg:hidden float-end justify-end w-full" style={{textAlign:'end'}}>
                                        <button onClick={toggleMobileMenu} className="justify-end">
                                            {isMenuOpen ? <FaTimes className="float-end text-2xl text-end"/> :
                                                <FaBars className="text-white text-2xl text-end"/>}
                                        </button>
                                    </div>
                                    <ul className="flex flex-col items-center space-y-6  text-2xl">
                                        {['Popular', 'Physical Education', 'Real Man', 'Electronic', 'Lottery Ticket', 'Chess Board', 'Fishing'].map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleMenuItemClick(item)}
                                                className={`cursor-pointer ${selectedMenu === item ? 'underline font-bold' : ''}`} // Apply active style
                                            >
                                                {item}

                                                {selectedMenu === item && (
                                                    <div className="flex items-center justify-center md:hidden w-100">
                                                        {Submenu[selectedMenu].map((game, index) => (
                                                            <li
                                                                key={index}
                                                                className="overflow-y-scroll w-40 h-40 p-4 text-themeYellow shadow-md text-center text-lg bg-transparent flex items-center justify-center"
                                                            >
                                                                    <motion.img
                                                                        src={game.image}
                                                                        alt={game.name}
                                                                        className="h-32 w-32 mx-auto"
                                                                        initial={{opacity: 0}}
                                                                        animate={{opacity: 1}}
                                                                        transition={{duration: 0.5}}
                                                                    />

                                                            </li>
                                                        ))}
                                                    </div>
                                                )}

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
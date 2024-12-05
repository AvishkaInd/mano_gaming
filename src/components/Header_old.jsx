import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For hamburger icon
import logo_white from "../images/logo/logo-white.webp";
import { Submenu } from "../Data/index";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const HeaderOld = () => {
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
        const selectedSubmenu = Submenu[menu];
        console.log(activeMenu);
        clearTimeout(timeoutId);


        if (selectedSubmenu.items && selectedSubmenu.items.length > 0) {
            if (menu !== activeMenu) {
                setPrevMenu(activeMenu);
                setActiveMenu(menu);
            }
        } else {
            setActiveMenu(null);
        }

    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setActiveMenu(null);
            setPrevMenu(null);
        }, 1000);
        setTimeoutId(id);
    };



    return (
        <div className="nav_wrapper z-20">
            <div className="nav_bar_top"></div>
            <nav className="top-0 nav_bar_wrap bg-blue-800  shadow-lg">
                <div className="nav_bar_content flex justify-between px-4 md:px-16 lg:px-8 xl:px-32 2xl:px-14 items-center relative z-40">
                    <div className="flex">
                        <img src={logo_white} className="w-15 h-12 cursor-pointer" alt="Logo" onClick={()=>(window.location.href="/")} />
                        <ul className={`lg:flex space-x-4 hidden ${isMenuOpen ? 'block' : 'hidden'} ml-12 mt-2 absolute md:static left-0 top-full w-full md:w-auto bg-blue-800 md:bg-transparent`}>
                            {Object.keys(Submenu).map((key, index) => {
                                const submenu = Submenu[key];
                                const isActive = window.location.pathname === submenu.link;
                                return(
                                    <li
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(key)}
                                        onMouseLeave={handleMouseLeave}
                                        className={`hover:text-themeYellow px-1 nav-item  relative group cursor-pointer ml-4 py-2 md:py-0 text-center text-white ${isActive ? ' border-b-4 border-themeYellow' : ''}`}
                                        onClick={submenu.items.length === 0 ? () => (window.location.href = submenu.link) : () => {}}
                                    >
                                        {submenu.name || key}
                                    </li>
                                );
                            })};
                        </ul>
                    </div>


                    <div className="hidden lg:flex space-x-4  ">
                        <button className="nav_bar_register-btn b px-2 py-4" onClick={()=> (window.location.href="https://www.top11india.com/register")}>Register</button>
                        <button className="border border-themeYellow text-themeYellow rounded  p-2 w-24 leading-4 tracking-wide" onClick={()=> (window.location.href="https://www.top11india.com/register")}>Login</button>
                    </div>

                    <AnimatePresence mode="wait">
                        {/*{activeMenu === "Sports" && (*/}
                        {/*    <div*/}
                        {/*        className={`absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-60 transition-all ${activeMenu === 'Sports' ? 'h-96' : 'h-0'   }`}*/}
                        {/*        onMouseEnter={() => clearTimeout(timeoutId)}*/}
                        {/*        onMouseLeave={handleMouseLeave}*/}
                        {/*    >*/}
                        {/*        <div*/}
                        {/*            className={`container mx-auto flex ${*/}
                        {/*                Submenu[activeMenu]?.items?.length > 3 ? 'justify-around' : 'justify-center gap-18'*/}
                        {/*            }`}*/}
                        {/*        >*/}
                        {/*            {Submenu[activeMenu].items?.map((submenuItem, submenuIndex) => (*/}
                        {/*                <div key={submenuIndex} className="text-center hover_active_menu">*/}
                        {/*                    <motion.img*/}
                        {/*                        src={submenuItem.image}*/}
                        {/*                        onClick={() => (window.location.href = submenuItem.link)}*/}
                        {/*                        alt={submenuItem.name}*/}
                        {/*                        className={`h-42 w-42 mx-auto cursor-pointer hover:scale-100 ${*/}
                        {/*                            Submenu[activeMenu]?.items?.length > 3 ? 'px-2' : 'px-12'*/}
                        {/*                        }`}*/}
                        {/*                        initial={{opacity: 0}}*/}
                        {/*                        animate={{opacity: 1}}*/}
                        {/*                        transition={{*/}
                        {/*                            duration: 0.6,*/}
                        {/*                            delay: submenuIndex * 0.1,  // Staggered delay for smooth effect*/}
                        {/*                            ease: "easeOut",*/}
                        {/*                        }}*/}
                        {/*                    />*/}
                        {/*                </div>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}


                        {/*{activeMenu === "Live" && (*/}
                        {/*    <div*/}
                        {/*        className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-60 h-auto "*/}
                        {/*        onMouseEnter={() => clearTimeout(timeoutId)}*/}
                        {/*        onMouseLeave={handleMouseLeave}*/}
                        {/*    >*/}
                        {/*        <div*/}
                        {/*            className={`container mx-auto flex ${*/}
                        {/*                Submenu[activeMenu]?.items?.length > 3 ? 'justify-around' : 'justify-center gap-18'*/}
                        {/*            }`}*/}
                        {/*        >*/}
                        {/*            {Submenu[activeMenu].items?.map((submenuItem, submenuIndex) => (*/}
                        {/*                <div key={submenuIndex} className="text-center hover_active_menu">*/}
                        {/*                    <motion.img*/}
                        {/*                        src={submenuItem.image}*/}
                        {/*                        onClick={() => (window.location.href = submenuItem.link)}*/}
                        {/*                        alt={submenuItem.name}*/}
                        {/*                        className={`h-42 w-42 mx-auto cursor-pointer hover:scale-100 ${*/}
                        {/*                            Submenu[activeMenu]?.items?.length > 3 ? 'px-2' : 'px-12'*/}
                        {/*                        }`}*/}
                        {/*                        initial={{opacity: 0}}*/}
                        {/*                        animate={{opacity: 1}}*/}
                        {/*                        transition={{*/}
                        {/*                            duration: 0.6,*/}
                        {/*                            delay: submenuIndex * 0.1,  // Staggered delay for smooth effect*/}
                        {/*                            ease: "easeOut",*/}
                        {/*                        }}*/}
                        {/*                    />*/}
                        {/*                </div>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}

                        {prevMenu && Submenu[prevMenu]?.items?.length > 0 && (
                            <motion.div
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-70"
                                initial={{ opacity: 1, height: '200px' }}  // Keep height 'auto' initially
                                animate={{ opacity: 1, height: '-200px' }}  // Animate opacity and height to 0 when exiting
                                exit={{ opacity: 1, height:'200px' }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}  // Use easeInOut for smooth transition
                            >
                                <div
                                    className={`container mx-auto flex ${
                                        Submenu[prevMenu]?.items?.length > 3 ? 'justify-around' : 'justify-center mt-[-20px] gap-18'
                                    }`}
                                >
                                    {Submenu[prevMenu].items?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center hover_active_menu">
                                            <motion.img
                                                onClick={() => (window.location.href = submenuItem.link)}
                                                src={submenuItem.image}
                                                alt={submenuItem.name}
                                                className={`h-42 w-42 mx-auto cursor-pointer hover:scale-100 ${
                                                    Submenu[prevMenu]?.items?.length > 3 ? 'px-2' : 'px-12'
                                                }`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: submenuIndex * 0.1, // Staggered delay for smooth effect
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeMenu && Submenu[activeMenu]?.items?.length > 0 && (
                            <motion.div
                                className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-60 "
                                initial={{ opacity: 0, height: '0px' }}  // Start with height 0
                                animate={{ opacity: 1, height: '200px' }}  // Animate height to 'auto' when visible
                                exit={{ opacity: 0, height: '0px' }}  // Shrink back to height 0 when exiting
                                onMouseEnter={() => clearTimeout(timeoutId)}
                                onMouseLeave={handleMouseLeave}
                                transition={{ duration: 0.4, ease: "easeInOut" }}  // Smoother easing for transitions
                            >
                                <div
                                    className={`container mx-auto flex ${
                                        Submenu[activeMenu]?.items?.length > 3 ? 'justify-around' : 'justify-center gap-18'
                                    }`}
                                >
                                    {Submenu[activeMenu].items?.map((submenuItem, submenuIndex) => (
                                        <div key={submenuIndex} className="text-center hover_active_menu">
                                            <motion.img
                                                src={submenuItem.image}
                                                onClick={() => (window.location.href = submenuItem.link)}
                                                alt={submenuItem.name}
                                                className={`h-42 w-42 mx-auto cursor-pointer hover:scale-100 ${
                                                    Submenu[activeMenu]?.items?.length > 3 ? 'px-2' : 'px-12'
                                                }`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: submenuIndex * 0.1,  // Staggered delay for smooth effect
                                                    ease: "easeOut",
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

export default HeaderOld;
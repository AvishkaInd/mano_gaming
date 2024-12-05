import React from 'react';
import {motion} from "framer-motion";
import logo_white from "../images/logo/logo-white.webp";
import {FaBars, FaChevronDown, FaChevronUp, FaTimes} from "react-icons/fa";
import {Submenu} from "../Data";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import image1 from "../images/games/game1.webp";
import image2 from "../images/games/game2.png";
import image3 from "../images/games/game3.png";
import image4 from "../images/games/game4.png";

const Test = () => {
    return (
        <div>

            <>

                {/* Hamburger menu for mobile */}
                {/*<div className="lg:hidden flex items-center">*/}
                {/*    <button onClick={toggleMobileMenu}>*/}
                {/*        {isMenuOpen ? <FaTimes className="text-white text-2xl"/> :*/}
                {/*            <FaBars className="text-white text-2xl"/>}*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/* Menu items - hidden on mobile */}
                {/*{isMenuOpen && (*/}
                {/*    <motion.div*/}
                {/*        initial={{opacity: 0}}*/}
                {/*        animate={{ opacity: 1 }}*/}
                {/*        exit={{ opacity: 0 }}*/}
                {/*        transition={{ duration: 0.3 }}*/}
                {/*        className="fixed inset-0 bg-opacity-95 grid grid-cols-1 md:grid-cols-3"*/}
                {/*    >*/}
                {/*        <div className="nav_bar_tablet_nav_item_wrapper hidden md:block opacity-80">*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="nav_bar_tablet_nav_link_wrapper md:col-span-2 flex flex-col overflow-y-scroll  space-y-8 z-50">*/}

                {/*            <div*/}
                {/*                className="lg:flex md:flex bg-themeBlue h-20 px-6 float-end  w-full flex justify-between">*/}
                {/*                <img src={logo_white} className="mt-2 w-28 h-16" />*/}
                {/*                <button onClick={toggleMobileMenu} className="justify-end">*/}
                {/*                    {isMenuOpen ?*/}
                {/*                        <FaTimes className="float-end text-2xl text-end text-themeYellow" /> :*/}
                {/*                        <FaBars className="text-white text-2xl text-end" />}*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*            <ul className="flex flex-col items-center space-y-6  text-2xl px-6">*/}
                {/*                {Object.keys(Submenu).map((item, index) => (*/}
                {/*                    <li key={index} className="cursor-pointer w-full">*/}
                {/*                        <div className="flex items-center justify-between w-full"*/}
                {/*                             onClick={() => handleMenuItemClick(item)}>*/}
                {/*                                    <span*/}
                {/*                                        className={`cursor-pointer ${selectedMenu === item ? 'font-bold' : ''}`}>*/}
                {/*                                        {item}*/}
                {/*                                    </span>*/}

                {/*                            {selectedMenu === item ? (*/}
                {/*                                <FaChevronUp*/}
                {/*                                    className="ml-2 cursor-pointer"*/}
                {/*                                    onClick={(e) => {*/}
                {/*                                        e.stopPropagation();*/}
                {/*                                        handleMenuItemClick(null);*/}
                {/*                                    }}*/}
                {/*                                />*/}
                {/*                            ) : (*/}
                {/*                                <FaChevronDown className="ml-2 cursor-pointer" />*/}
                {/*                            )}*/}
                {/*                        </div>*/}

                {/*                        {selectedMenu === item && (*/}
                {/*                            <div className="flex items-center justify-center py-4 w-100">*/}

                {/*                                <Swiper*/}
                {/*                                    slidesPerView={2.5}*/}
                {/*                                    grabCursor={true}*/}
                {/*                                    centeredSlides={true}*/}
                {/*                                    spaceBetween={5}*/}
                {/*                                    freeMode={true}*/}
                {/*                                    pagination={{*/}
                {/*                                        clickable: true,*/}
                {/*                                    }}*/}
                {/*                                    modules={[FreeMode]}*/}
                {/*                                    className="mySwiper"*/}
                {/*                                >*/}
                {/*                                    {[image1, image2, image3, image4].map((image, index) => (*/}
                {/*                                        <SwiperSlide key={index}>*/}
                {/*                                            <img*/}
                {/*                                                src={image}*/}
                {/*                                                alt={`Slide ${index + 1}`}*/}
                {/*                                                className="w-full h-full object-cover rounded-lg" // Tailwind for full width, height, and border radius*/}
                {/*                                                style={{ borderRadius: '8px' }} // Additional inline style option if needed*/}
                {/*                                            />*/}
                {/*                                        </SwiperSlide>*/}
                {/*                                    ))}*/}
                {/*                                </Swiper>*/}
                {/*                            </div>*/}
                {/*                        )}*/}

                {/*                    </li>*/}


                {/*                ))}*/}
                {/*            </ul>*/}
                {/*            <div className="flex w-full px-6 gap-2 py-6">*/}
                {/*                <button*/}
                {/*                    className="bg-themeBlue text-themeYellow px-6 py-3 rounded text-lg w-1/2"*/}
                {/*                >*/}
                {/*                    Register*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    className="bg-transparent border-themeBlue border-2 px-6 py-3 rounded text-lg w-1/2"*/}
                {/*                >*/}
                {/*                    Login*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}


                {/*    </motion.div>*/}
                {/*)}*/}
            </>


        </div>
    );
};

export default Test;
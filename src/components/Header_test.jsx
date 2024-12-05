import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo_white from "../images/logo/logo-white.webp";
import { Submenu } from "../Data/index";

const HeaderTest = () => {
    const [hoveredKey, setHoveredKey] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMouseEnter = (key) => {
        setHoveredKey(key);
    };

    const handleMouseLeave = () => {
        setHoveredKey(null);
    };

    return (
        <div className="flex relative">
            <img
                src={logo_white}
                className="w-15 h-12 cursor-pointer"
                alt="Logo"
                onClick={() => (window.location.href = "/")}
            />
            <ul
                className={`lg:flex space-x-4 ${
                    isMenuOpen ? 'block' : 'hidden'
                } ml-12 mt-2 absolute md:static left-0 top-full w-full md:w-auto bg-blue-800 md:bg-transparent z-50`}
            >
                {Object.keys(Submenu).map((key, index) => {
                    const submenu = Submenu[key];
                    const isActive = window.location.pathname === submenu.link;
                    return (
                        <li
                            key={index}
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                            className={`relative group cursor-pointer ml-4 py-2 md:py-0 text-center text-white ${
                                isActive ? 'border-b-4 border-themeYellow' : ''
                            }`}
                            onClick={
                                submenu.items.length === 0
                                    ? () => (window.location.href = submenu.link)
                                    : () => {}
                            }
                        >
                            <span className="hover:text-themeYellow px-1 nav-item">{submenu.name || key}</span>
                        </li>
                    );
                })}
            </ul>

            {/* Full-width action bar with staggered animation */}
            <AnimatePresence mode="wait">
                {hoveredKey && (
                    <motion.div
                        key={hoveredKey} // This ensures Framer Motion recognizes the change
                        className="absolute left-0 top-full w-full nav_bar_action_list shadow-lg z-40"
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{
                            y: { type: 'liner', stiffness: 100 },
                            opacity: { duration: 0.3 },
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: hoveredKey ? 0.1 : 0.1 // Adjusts entry and exit overlap
                        }}
                    >
                        <h1>Transitioning Action Bar</h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderTest;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutId); // Clear any existing timeout
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setActiveMenu(null);
        }, 200); // Delay before hiding the menu
        setTimeoutId(id); // Store the timeout ID
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
        <nav className="bg-blue-900 text-white flex justify-between px-8 py-4 items-center relative z-40">
            <div className="text-xl font-bold">RG嘉遊</div>
            <ul className="flex space-x-4">
                {['Popular', 'Physical Education', 'Real Man', 'Electronic', 'Lottery Ticket', 'Chess Board', 'Fishing'].map((item, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                        className="relative group cursor-pointer"
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex space-x-4">
                <button className="bg-blue-500 px-4 py-2 rounded">Registered</button>
                <button className="bg-blue-500 px-4 py-2 rounded">Live in</button>
            </div>

            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: [0.6, -0.05, 0.01, 0.99],
                        }}
                        className="absolute left-0 top-full w-full bg-blue-800 py-4 shadow-lg"
                        style={{ backgroundColor: 'rgba(37, 99, 235, 0.7)' }}
                        onMouseEnter={() => clearTimeout(timeoutId)} // Prevent hiding on hover
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="container mx-auto flex justify-around">
                            {submenus[activeMenu]?.map((submenuItem, submenuIndex) => (
                                <div key={submenuIndex} className="text-center">
                                    <img src={`/path-to-image${submenuIndex}`} alt={submenuItem} className="h-12 w-12" />
                                    <p>{submenuItem}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;

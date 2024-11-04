import React from 'react';

import logoFooter1 from "../images/game-logo/9-wickets-40px-x-80px copy.webp";
import logoFooter2 from "../images/game-logo/AGgaming-40px-x-80px.webp";
import logoFooter3 from "../images/game-logo/FC-40px-x-80px.webp";
import logoFooter4 from "../images/game-logo/FC-FISH-40px-x-80px.webp";
import logoFooter5 from "../images/game-logo/GMG-40px-x-80px.webp";
import logoFooter6 from "../images/game-logo/Ka-gaming-40px-x-80px.webp";
import logoFooter7 from "../images/game-logo/Kingmaker--40px-x-80px.webp";
import logoFooter8 from "../images/game-logo/Play-40px-x-80px.webp";
import logoFooter9 from "../images/game-logo/SSG-40px-x-80px.webp";
import logoFooter10 from "../images/game-logo/SV-388-40px-x-80px.webp";
import logoFooter11 from "../images/game-logo/Saba-40px-x-80px.webp";
import logoFooter12 from "../images/game-logo/Saganing-40px-x-80px.webp";
import logoFooter13 from "../images/game-logo/Sexygaming40px-x-80px.webp";
import logoFooter14 from "../images/game-logo/bang-40px-x-80px copy.webp";
import logoFooter15 from "../images/game-logo/cq9-40px-x-80px.webp";
import logoFooter16 from "../images/game-logo/dragoonsoft-400x464.webp";

const Footer = () => {
    return (
        <footer className="footer_custom text-white py-8">
            <div className="container mx-auto px-12 sm:px-2 md:px-2 lg:px-2 xl:px-10">
                <div
                    className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-4 justify-items-center'>
                    <img src={logoFooter1} className='BlueFilter'/>
                    <img src={logoFooter2} className='BlueFilter'/>
                    <img src={logoFooter3} className='BlueFilter'/>
                    <img src={logoFooter4} className='BlueFilter'/>
                    <img src={logoFooter5} className='BlueFilter'/>
                    <img src={logoFooter6} className='BlueFilter'/>
                    <img src={logoFooter7} className='BlueFilter'/>
                    <img src={logoFooter8} className='BlueFilter'/>
                    <img src={logoFooter9} className='BlueFilter'/>
                    <img src={logoFooter10} className='BlueFilter'/>
                    <img src={logoFooter11} className='BlueFilter'/>
                    <img src={logoFooter12} className=''/>
                    <img src={logoFooter13} className='BlueFilter'/>
                    <img src={logoFooter14} className='BlueFilter'/>
                    <img src={logoFooter15} className='BlueFilter'/>
                    <img src={logoFooter16} className='BlueFilter'/>
                </div>
                {/* Copyright Section */}

                <div className="text-center mt-4 text-gray-500">
                    <br/>
                    © {new Date().getFullYear()} | All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import column_image from "../images/image-column/700x600.png";
import qr_code from "../images/image-column/QR 200x200.webp";
import logo from "../images/logo/logo-white.webp";
import ios_logo from "../images/image-column/App-store.png";
import android_logo from "../images/image-column/Google-play.png";
const AboutColumn = () => {
    return (
        <div className="py-8 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Image Column */}
            <div className="flex justify-center lg:justify-center col-span-3">
                <img
                    src={column_image}
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[700px] xl:max-h-[600px] mt-0 lg:mt-[-20px] xl:mt-[-40px]"
                    alt="Column Image"
                />
            </div>

            {/* Text Content Column */}
            <div className="text-white flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 px-4 md:px-8 lg:px-0 col-span-2">
                {/* Logo and Title */}
                <div className="text-center lg:text-left">
                    <img src={logo} className="w-64" alt="Logo" />
                    <h2 className="text-lg sm:text-xl xl:text-3xl">Have it anytime, anywhere</h2>
                </div>

                {/* Description Text */}
                <p className="text-center lg:text-left max-w-md lg:max-w-lg text-gray-300">
                    Allowing you to place mobile bets at any time. It provides global popular game resources and enriches sports events, e-sports events, real-person entertainment, lottery betting, electronic games, etc. Scan the code to visit immediately.
                </p>

                {/* QR Code and Download Section */}
                <div className="flex flex-row lg:flex-row items-center lg:items-start space-x-2 sm:space-x-4 xl:space-x-4 space-y-4 lg:space-y-0 lg:space-x-8">
                    {/* QR Code */}
                    <div className="bg-white p-2 rounded-md qr_code">
                        <img src={qr_code} alt="QR Code" className="h-32 w-32 sm:h-40 sm:w-40 md:h-32 md:w-32 xl:w-[165px] xl:h-[165px]  "/>
                    </div>

                    {/* App Icon and Button */}
                    <div className="flex flex-col lg:items-start">
                       <img src={ios_logo} className="button-system-icons mt-1 sm:mt-1 md:mt-2 lg:mt-[12px] xl:mt-[50px]"/>
                        <img src={android_logo} className="button-system-icons"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutColumn;

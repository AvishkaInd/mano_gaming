import React, { useState } from 'react';
import { Submenu } from "../schema";
import button from "../images/button.webp";


const TabContent = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState(Object.keys(Submenu)[0]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        if (onTabChange) {
            onTabChange(tabName);  // Call the parent's callback function
        }
    };
    return (
        <div className="py-4 sm:py-8">
            <div className="flex items-center justify-center mt-4 overflow-x-auto">
                <div className="relative p-1 rounded-full tab_container  w-full max-w-full lg:max-w-[890px] mx-auto">
                    <div className="flex tab_inner space-x-2">
                        {Object.keys(Submenu).map((tabName, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 font-medium rounded-full transition duration-300 ${
                                    activeTab === tabName ? "bg-blue-300 text-blue-900 tab_active" : "text-white"
                                }`}
                                style={{
                                    backgroundImage: activeTab === tabName ? `url(${button})` : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                onClick={() => handleTabClick(tabName)}
                            >
                                {tabName}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabContent;

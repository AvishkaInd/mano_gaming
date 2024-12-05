import React, { useState } from 'react';
import { Tabmenus } from "../Data";
import button from "../images/button.webp";


const TabSlider = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState(Object.keys(Tabmenus)[0]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        if (onTabChange) {
            onTabChange(tabName);  // Call the parent's callback function
        }
    };
    return (
        <div className="py-4 sm:py-8">
            <div className="flex items-center justify-center mt-4 overflow-x-auto">
                <div className="relative p-1 rounded-full tab_container">
                    <div className="flex tab_inner space-x-2">
                        {Object.keys(Tabmenus).map((tabName, index) => (
                            <button
                                key={index}
                                className={`tab px-4 py-2 font-medium rounded-full transition duration-300 ${
                                    activeTab === tabName ? "tab_active" : ""
                                }`}
                                style={{
                                    backgroundImage: activeTab === tabName ? `url(${button})` : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: activeTab === tabName ? `#fff` : "",
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

export default TabSlider;

import React, {useState} from 'react';
import {Submenu} from "../schema";
import button from "../images/button.webp";
const TabContent = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(Submenu)[0]);
    return (
        <div className="py-8">
            <div className="flex items-center justify-center mt-4 sm:overflow-y-scroll">
                <div className="relative p-1 rounded-full w-auto tab_container">
                    <div className="flex tab_inner">
                        {Object.keys(Submenu).map((tabName, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 text-white font-medium rounded-full transition duration-300 ${
                                    activeTab === index ? "bg-blue-300 text-blue-900 tab_active" : "text-white" 
                                }`}
                                style={{
                                    backgroundImage: activeTab === tabName ? `url(${button})` :"none",
                                    backgroundSize: "cover", // Adjust as needed
                                    backgroundPosition: "center", // Adjust as needed
                                }}
                                onClick={() => setActiveTab(tabName)}
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
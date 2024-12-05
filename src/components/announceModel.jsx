import React, { useState } from 'react';
import { BiSolidCategory, BiSolidBank } from 'react-icons/bi';
import { GrGamepad, GrAnnounce } from 'react-icons/gr';
import { Announcements } from "../Data/index";

const AnnounceModel = () => {
    const [isOpen, setIsOpen] = useState(true); // Controls the main modal visibility
    const [activeTab, setActiveTab] = useState('full');
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null); // Tracks the clicked announcement for details modal

    const handleClose = () => setIsOpen(false);
    const handleAnnouncementClick = (announcement) => setSelectedAnnouncement(announcement); // Open details modal
    const closeDetailsModal = () => setSelectedAnnouncement(null); // Close details modal

    return (
        <>
            {/* Main Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-gray-800 text-white w-[600px] rounded-lg shadow-lg overflow-hidden">
                        <div className="flex items-center justify-between p-4 modal_header">
                            <h2 className="text-xl font-light tracking-wide text-center">Latest announcement</h2>
                            <button className="text-white text-xl" onClick={handleClose} aria-label="Close">✖</button>
                        </div>

                        {/* Tabs */}
                        <div className="bg-gray-800 rounded-lg">
                            <div className="flex justify-around bg-gray-700 py-2">
                                <button
                                    className={`tab-button flex-1 text-sm focus:outline-none justify-center ${activeTab === 'full' ? 'text-white font-semibold active' : 'text-blue-400'}`}
                                    onClick={() => setActiveTab('full')}
                                >
                                    <BiSolidCategory className="inline text-3xl mr-1" /> Announcements
                                </button>
                                <button
                                    className={`tab-button flex-1 text-sm focus:outline-none justify-center ${activeTab === 'website' ? 'text-white font-semibold active' : 'text-blue-400'}`}
                                    onClick={() => setActiveTab('website')}
                                >
                                    <GrAnnounce className="inline text-3xl mr-1" /> Website
                                </button>
                                <button
                                    className={`tab-button flex-1 text-sm focus:outline-none justify-center ${activeTab === 'game' ? 'text-white font-semibold active' : 'text-blue-400'}`}
                                    onClick={() => setActiveTab('game')}
                                >
                                    <GrGamepad className="inline text-3xl mr-1" /> Game
                                </button>
                                <button
                                    className={`tab-button flex-1 text-sm focus:outline-none justify-center ${activeTab === 'bank' ? 'text-white font-semibold active' : 'text-blue-400'}`}
                                    onClick={() => setActiveTab('bank')}
                                >
                                    <BiSolidBank className="inline text-3xl mr-1" /> Bank
                                </button>
                            </div>

                            {/* Announcements */}
                            <div className="p-4 space-y-3 min-h-[250px] max-h-[310px] overflow-y-scroll">
                                {Announcements.filter(
                                    (announcement) => activeTab === "full" || announcement.type === activeTab
                                ).map((announcement, index) => (
                                    <div key={index}
                                         className="hover:bg-sky-600 flex justify-between items-center bg-gray-700 p-2 rounded-md cursor-pointer"
                                         onClick={() => handleAnnouncementClick(announcement)}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-3xl mr-2">{announcement.icon}</span>
                                            <p className="text-sm">{announcement.message}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{announcement.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-700 p-3 text-center text-sm">
                            <label className="text-gray-400 text-end"> TOP11 </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Details Modal */}
            {selectedAnnouncement && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50" onClick={closeDetailsModal}>
                    <div className="bg-gray-800 text-white w-[500px] rounded-lg shadow-lg overflow-hidden shadow-lg ">
                        <div className="flex items-center justify-between mb-4 modal_header p-6">
                            <h3 className="text-xl font-semibold">Announcement Details</h3>
                            <button className="text-white text-xl" onClick={closeDetailsModal} aria-label="Close">✖</button>
                        </div>
                        <div className="mb-4 px-6">

                            <h4 className="text-lg font-medium flex"> <span className="text-3xl mr-2">{selectedAnnouncement.icon}</span> {selectedAnnouncement.message}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1 ml-9">{selectedAnnouncement.time}</p>
                        </div>
                        <p className="text-sm text-gray-300 ml-16"> {/* Detailed content */}
                            {selectedAnnouncement.desc}

                        </p>

                        <br/>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnnounceModel;

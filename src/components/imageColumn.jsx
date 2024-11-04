import React, {useEffect, useState} from 'react';
import { Tabmenus } from "../schema/index";


const ImageColumn = ({activeTab}) => {
    const items = (Tabmenus[activeTab] || []).filter(item => item.name === activeTab);


    return (
        <div className="py-8 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-4">

            {items.map((item, index) => (

                <>
                    <div
                         className="text-white flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 px-4 md:px-8 lg:px-0 col-span-2 ">
                        {/* Logo and Title */}
                        <div className="text-center lg:text-left ml-14">
                            <h2 className="text-7xl text-themeYellow font-bold str">{item.name}</h2>
                            <h1 className="text-themeYellow">------------- Under  Construction -------</h1>
                            <p className="text-center lg:text-left max-w-md lg:max-w-lg text-gray-300 py-4">
                                Explore a world of popular games that bring nonstop entertainment,
                                from fan-favorite classics to the latest hits. Dive into thrilling gameplay, challenge
                                your
                                skills,
                                and enjoy endless fun with the top games everyone’s talking about
                            </p>

                            <div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-12 py-8">
                                <button className="game_btn">
                                    <div className="tag_limit">Limit</div>
                                    1
                                </button>
                                <button className="game_btn">1</button>
                                <button className="game_btn">1</button>
                                <button className="game_btn">1</button>
                                <button className="game_btn">1</button>
                                <button className="game_btn">1</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-center col-span-3 order-first sm:order-first md:order-first lg:order-last xl:order-last 2xl:order-last"
                    >
                        <img
                            src={item.image}
                            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[700px] xl:max-h-[600px] ml-0 sm:ml-0  2xl:ml-14 xs:ml-14 mt-0 lg:mt-[-10px] xl:mt-[-10px]"
                            alt="Column Image"
                        />
                    </div>
                </>

            ))}


        </div>
    );
};

export default ImageColumn;
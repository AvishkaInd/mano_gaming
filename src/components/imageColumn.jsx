import React, {useEffect, useState} from 'react';
import { Tabmenus } from "../Data/index";
import cap_games from "../images/category_names/GAMES.png";


const ImageColumn = ({activeTab}) => {
    const Category = Tabmenus[activeTab] || null;
    const items = Category?.items || []

    return (
        <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-16 grid grid-cols-1 lg:grid-cols-4 gap-4">


                <>
                    <div
                        className="text-white flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 px-4 md:px-8 lg:px-0 xl:px-16 col-span-2 ">
                        {/* Logo and Title */}
                        <div className="text-center lg:text-left ">
                            <img src={Category.image} className="mx-auto sm:mx-auto lg:mx-0 xl:mx-0"/>
                            <p className="text-center lg:text-left max-w-md lg:max-w-lg text-gray-300 py-4">
                                {Category.text}
                            </p>

                            <div
                                className="flex gap-4 py-8 justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start">

                                {items.map((item, index) => (
                                    <button className="game_btn">
                                        <div className="tag_limit">Limit</div>
                                        1
                                    </button>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div
                        className="flex justify-center lg:justify-center xl:justify-center col-span-2 order-first sm:order-first md:order-first lg:order-last xl:order-last 2xl:order-last"
                    >
                        <img
                            src={Category.ColumnImage}
                            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-[-180px] lg:max-w-lg xl:max-w-[700px] md:max-h-[500px] xl:max-h-[600px] xl:mt-[-10px]"
                            alt="Column Image"
                        />
                    </div>
                </>


        </div>
    );
};

export default ImageColumn;
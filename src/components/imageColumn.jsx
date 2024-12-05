import React from 'react';
import { Tabmenus } from "../Data/index";
import { motion, AnimatePresence } from "framer-motion";

const ImageColumn = ({ activeTab }) => {
    const Category = Tabmenus[activeTab] || null;
    const items = Category?.items || [];

    // Animation variants
    const leftVariant = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -60 },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 60 },
    };

    return (
        <div className={`py-14 px-4 md:px-8 lg:px-16 xl:px-16  ${Category ? "grid lg:grid-cols-4" : "flex"} gap-4`}
             style={{height: "700px", overflow: "hidden"}}>
            <AnimatePresence mode="wait">
                {Category && (
                    <>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={leftVariant}
                            transition={{duration: 0.45, ease: "easeInOut"}}
                            key={`${activeTab}-left`}
                            className="ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-16 text-white flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 px-4 md:px-8 lg:px-0 xl:px-16 col-span-2"
                        >
                            <div className="text-center lg:text-left ml-0 sm:ml-0 lg:ml-0 xl:ml-0">
                                <img src={Category.image}
                                     className="max-w-64 max-h-24 mx-auto sm:mx-auto lg:mx-0 xl:mx-0" alt="Category"/>
                                <p className="text-center lg:text-left max-w-md lg:max-w-lg text-gray-300 py-4">
                                    {Category.text}
                                </p>
                                <div
                                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-8 w-full justify-items-center sm:gap-4 sm:py-8 sm:justify-center lg:justify-start xl:justify-start">
                                    {items.map((item, index) => (
                                        <button className="game_btn" key={index}
                                                onClick={() => (window.location.href = item.link)}>
                                            {item.tag != null && (
                                                <div className="tag_limit">{item.tag}</div>
                                            )}
                                            <img src={item.image} className='w-12' alt="Item"/>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={rightVariant}
                            transition={{duration: 0.45, ease: "easeInOut"}}
                            key={`${activeTab}-right`}
                            className="flex justify-center lg:justify-center xl:justify-center col-span-2 order-first sm:order-first md:order-first lg:order-last xl:order-last 2xl:order-last"
                        >
                            <img
                                src={Category.ColumnImage}
                                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-[-180px] lg:max-w-lg xl:max-w-[700px] md:max-h-[500px] xl:max-h-[600px] xl:mt-[-10px]"
                                alt="Column Image"
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageColumn;

import React, {useEffect, useState} from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Slides} from '../Data/index';

const HomeSlider = () => {
    const [screenSize, setScreenSize] = useState('desktop');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width <= 786) {
                setScreenSize('mobile');
            } else if (width <= 1020) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize(); // Set the initial screen size
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative">
            <br />
            <br />
            <br />
            <div className="slider-container ">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    draggable={true}
                    className="mySwiper"
                    style={{
                        "--swiper-pagination-color": "#002147",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "8px",
                        "--swiper-pagination-bullet-width": "15px",
                        "--swiper-pagination-bullet-horizontal-gap": "8px",
                        "--swiper-pagination-bullet-border-radius": ' 4px'
                    }}
                >
                    {Slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full mt-2 lg:mt-2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[330px] xl:h-[500px] 2xl:h-[520px]  bg-cover bg-center relative"
                                style={{
                                    backgroundImage: `url(${
                                        screenSize === 'mobile' ? slide.image_mobile :
                                            screenSize === 'tablet' ? slide.image_mobile :
                                                slide.image 
                                    })`
                                }}
                            >
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div
                className="absolute z-10 bottom-0 left-0 w-full  bg-blue-500 bg-opacity-50 text-white text-center overflow-hidden whitespace-nowrap">
                <div className="px-16 w-100 text-start">

                    <div
                        className="inline-block animate-marquee px-16"
                        style={{ animationDuration: "15s" }}
                    >
                        {/* Replace these with your own messages */}
                        <span className="mx-8">📢 [Notification 1]</span>
                        <span className="mx-8">📢 [ATM/網銀轉帳維護完成]</span>
                        <span className="mx-8">📢 [Beware of scams – Do not trust unknown customer service]</span>
                        <span className="mx-8">📢 [Notification 4]</span>
                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

export default HomeSlider;
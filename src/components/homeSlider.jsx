import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required images
import banner_one from "../images/ui-images/banner1.webp";
import banner_two from "../images/ui-images/banner2.webp";
import banner_three from "../images/ui-images/banner3.webp";
import banner_four from "../images/ui-images/banner4.webp";
import banner_five from "../images/ui-images/banner5.webp";
import banner_six from "../images/ui-images/banner6.webp";
import banner_seven from "../images/ui-images/banner7.webp";
import banner_eight from "../images/ui-images/banner8.webp";
import banner_nine from "../images/ui-images/banner9.webp";
import banner_ten from "../images/ui-images/banner10.webp";
import banner_eleven from "../images/ui-images/banner11.webp";
import banner_twelve from "../images/ui-images/banner12.webp";
import banner_thirteen from "../images/ui-images/banner13.webp";
import banner_fourteen from "../images/ui-images/banner14.webp";

const slides = [
    {
        image: banner_one,
        title: 'Slide 1 Title',
        subtitle: 'Slide 1 Subtitle'
    },
    {
        image: banner_two,
        title: 'Slide 2 Title',
        subtitle: 'Slide 2 Subtitle'
    },
    {
        image: banner_three,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    },
    {
        image: banner_four,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    },
    {
        image: banner_five,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_six,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_seven,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_eight,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_nine,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_ten,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_eleven,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
    ,
    {
        image: banner_twelve,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    },
    {
        image: banner_thirteen,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    },
    {
        image: banner_fourteen,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
];
const HomeSlider = () => {
    return (

        <div className="relative">
            <br/>
            <br/>
            <br/>
            <div className="slider-container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{clickable: true}}
                    autoplay={{delay: 3000}}
                    loop={true}
                    draggable={true}
                    className="mySwiper"
                    style={{
                        "--swiper-pagination-color": "#002147", // Active bullet color
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "8px", // Bullet height
                        "--swiper-pagination-bullet-width": "15px", // Bullet width
                        "--swiper-pagination-bullet-horizontal-gap": "8px",
                        "--swiper-pagination-bullet-border-radius": ' 4px'
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] bg-cover bg-center"
                                style={{backgroundImage: `url(${slide.image})`}}
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
                        style={{animationDuration: "15s"}}
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
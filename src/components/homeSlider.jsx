import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required modules

const slides = [
    {
        image: `${process.env.PUBLIC_URL}/header/hd1080.png`,
        title: 'Slide 1 Title',
        subtitle: 'Slide 1 Subtitle'
    },
    {
        image: `${process.env.PUBLIC_URL}/header/hd1080.png`,
        title: 'Slide 2 Title',
        subtitle: 'Slide 2 Subtitle'
    },
    {
        image: `${process.env.PUBLIC_URL}/header/hd1080.png`,
        title: 'Slide 3 Title',
        subtitle: 'Slide 3 Subtitle'
    }
];
const HomeSlider = () => {
    return (

        <div>
            <div className="slider-container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper h-100"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute bottom-10 left-10 text-white">
                                    <h2 className="text-4xl font-bold">{slide.title}</h2>
                                    <p className="text-xl mt-2">{slide.subtitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeSlider;
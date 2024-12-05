import React, {useEffect, useState} from 'react';
import bg_image from "../images/sponsor/back-top.jpg";
import logo from "../images/logo/logo-white.webp";
import { FaFacebook, FaTwitter, FaTelegram, FaWhatsapp,   } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import {Footer, Header} from '../components';
import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';


import introduction_image from "../images/sponsor/1-3.png";

//intro images
import intro_image_one from "../images/sponsor/o1.jpg";
import intro_image_two from "../images/sponsor/o2.png";
import intro_image_tree from "../images/sponsor/o3.png";

//football video
import football_video from "../images/sponsor/vid.mp4";
import football_image from "../images/sponsor/top3.png";

//football
import football_one from "../images/sponsor/top1.png";
import football_two from "../images/sponsor/top3.png";
import football_three from "../images/sponsor/top4.png";
import football_four from "../images/sponsor/top5.png";
import football_five from "../images/sponsor/top6.png";
import football_six from "../images/sponsor/top7.png";

import cricket_video from "../images/sponsor/cricket.mp4";

import crickt_one from  "../images/sponsor/champc.png";
import crickt_two from  "../images/sponsor/cricket2.png";
import crickt_tree from  "../images/sponsor/cricket4.png";
import crickt_four from  "../images/sponsor/cricket5.png";

import licen_one from "../images/sponsor/agcc.jpg";
import licen_two from "../images/sponsor/ukgc.jpg";
import licen_tree from "../images/sponsor/gra.jpg";
import licen_four from "../images/sponsor/lc.webp";
import licen_five from "../images/sponsor/MGA.webp";
import licen_six from "../images/sponsor/cgc.png";
import bgOverlay from "../images/Background.png";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import {Pagination, EffectCoverflow} from "swiper/modules";


const Sponsor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [activeImageArray, setActiveImageArray] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const IntroImages = [
        intro_image_one,
        intro_image_two,
        intro_image_tree,
    ];

    const LicenImages = [
        licen_one,
        licen_two,
        licen_tree,
        licen_four,
        licen_five,
        licen_six,
    ];

    const Football_feildImages = [
        football_image
    ];

    const football_images = [
        football_two,
        football_three,
        football_four,
        football_five,
    ];

    const Crick_Images = [
        crickt_one,
        crickt_two,
        crickt_tree,
        crickt_four,
    ];

    const openLightbox = (imagesArray, index) => {
        setActiveImageArray(imagesArray);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleScrollDown = () => {
        document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='body_wrapper'>
            <Header/>
            <div style={{
                backgroundImage: `url(${bgOverlay})`,
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>


                <div className=" isolate px-6 pt-14 lg:px-8 moving-background">

                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                            }}
                        ></div>
                    </div>

                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white-900/10 hover:ring-yellow-300">
                                Announcing our latest Promotions.{" "}
                                <a href="/promotion" className="font-semibold text-yellow-300">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    Read here <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="text-balance text-5xl font-semibold tracking-tight text-yellow-300">
                                Your Global Destination for Betting Excellence

                            </h1>
                            <p className="mt-8 text-pretty text-sm font-medium text-white sm:text-xl/8">
                                <TypeAnimation
                                    sequence={[
                                        'Established in 2012 ',
                                        1500,
                                        'TOP11 Delivers an Exceptional Betting Experience',
                                        1500,
                                        'Offering a Diverse Selection of Sports and Entertainment Options',
                                        1500,
                                        'Trusted by Millions Globally',
                                        3000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{fontSize: '1em', display: 'inline-block'}}
                                    repeat={Infinity}
                                />
                            </p>

                        </div>
                    </div>

                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80. 7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                            }}
                        ></div>
                    </div>
                </div>

                <div className="bg-themeBlue text-white py-8">
                    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                alt="A character with blue hair and armor, holding a weapon, in a dynamic pose"
                                className=""
                                height="400"
                                src={introduction_image}
                                width="600"
                            />
                        </div>
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
                            <h1 className="text-5xl text-themeYellow font-bold">Introduction</h1>
                            <p className="mt-4 text-gray-400">
                                TOP11 is a global sports betting website, founded in 2012 in the United Kingdom. The
                                platform offers a wide range of sports events and diversified entertainment projects,
                                catering to players worldwide. Over the years, TOP11 has built a reputation for
                                providing an exciting and seamless betting experience, attracting millions of loyal
                                players across the globe..
                            </p>

                            <div className="w-full flex flex-col items-center md:items-end mt-6 md:pr-16">
                                <div className="grid grid-cols-3 gap-2">
                                    {IntroImages.map((src, index) => (
                                        <motion.img
                                            key={index}
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="cursor-pointer w-full h-full object-cover rounded-2xl"
                                            whileHover={{scale: 1}}
                                            onClick={() => openLightbox(IntroImages, index)}
                                        />
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-themeBlue text-white py-16">
                    <div className="relative h-screen parallax">
                        {/* Background Video */}
                        <video
                            autoPlay
                            muted
                            loop
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={football_video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
                            <div className="max-w-lg">
                                <div className="bg-yellow-300 text-xl text-blue-600  px-2 py-1 inline-block mb-4">
                                    Memories
                                </div>
                                <h1 className="text-5xl font-bold mb-4"> Top11 and PSV have come together</h1>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-themeBlue text-white px-14">
                    <div className=" py-8 flex flex-col md:flex-row items-center">
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
                            <h1 className="text-5xl text-themeYellow font-bold">Sponsor
                                of football field</h1>
                            <br/>
                            <p className="">
                                Top11 and PSV have come together to embody the shared mission of "achieving greatness
                                together". This collaboration brings the world's most prestigious sports events to life,
                                offering an unparalleled interactive entertainment experience for fans and platform
                                users alike, with moments of excitement and enjoyment at every turn.

                            </p>
                            <br/>
                            <p>
                                Top11 signed an official partnership with PSV Football Club in 2018, marking a new
                                chapter in global sports collaboration. Together with PSV, Top11 is dedicated to
                                advancing the future of sports and ushering in a new era of sports entertainment,
                                delivering an experience that redefines the connection between fans and the game.
                            </p>


                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                alt="A character with blue hair and armor, holding a weapon, in a dynamic pose"
                                className=" rounded-lg"
                                height="400"
                                src={football_image}
                                width="600"
                            />
                        </div>

                    </div>
                </div>


                <div className="bg-themeBlue text-white py-14">
                    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                alt="A character with blue hair and armor, holding a weapon, in a dynamic pose"
                                className="  rounded-lg"
                                height="400"
                                src={football_one}
                                width="600"
                            />
                        </div>
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
                            <h1 className="text-5xl text-themeYellow font-bold"> Sponsor Gallery Football</h1>
                            <h3 className="text-white mt-2  text-lg ">
                                PSV Eindhoven official partner - Top11
                            </h3>
                            <p className="mt-4 text-white">
                                TOP11 is a global sports betting website, founded in 2012 in the United Kingdom. The
                                platform offers a wide range of sports events and diversified entertainment projects,
                                catering to players worldwide. Over the years, TOP11 has built a reputation for
                                providing an exciting and seamless betting experience, attracting millions of loyal
                                players across the globe..
                            </p>

                            <div className="w-full flex flex-col items-center md:items-end mt-6 md:pr-16">
                                <div className="grid grid-cols-4 gap-2">
                                    {football_images.map((src, index) => (
                                        <motion.img
                                            key={index}
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="cursor-pointer w-full h-full object-cover rounded-2xl"
                                            whileHover={{scale: 1}}
                                            onClick={() => openLightbox(football_images, index)}
                                        />
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-themeBlue text-white py-16">
                    <div className="relative h-screen parallax">
                        {/* Background Video */}
                        <video
                            autoPlay
                            muted
                            loop
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={cricket_video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
                            <div className="max-w-lg">
                                <div className="bg-yellow-300 text-xl text-blue-600  px-2 py-1 inline-block mb-4">
                                    Memories
                                </div>
                                <h1 className="text-5xl font-bold mb-4"> Top11 and Jaffna Stallions have come
                                    together</h1>
                                <p className="text-white text-sm md:text-base">
                                    As the leading global sports entertainment brand, Top11 signed a contract with
                                    Jaffna
                                    Stallions in 2020, becoming the official partner of the Lanka Premier League.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-themeBlue text-white px-14">
                    <div className=" py-8 flex flex-col md:flex-row items-center">
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
                            <h1 className="text-5xl text-themeYellow font-bold"> Sponsor of cricket field</h1>
                            <br/>
                            <p className="">
                                TOP11 is one of the leading global sports betting platforms, founded in the UK in
                                2012.
                                Backed by a professional technical team, TOP11 develops gaming content that caters
                                to
                                players worldwide. We offer thrilling sports events and a wide range of
                                entertainment
                                options. Most importantly, we are committed to delivering the ultimate gaming
                                experience
                                for all our players.
                            </p>
                            <br/>
                            <p>
                                Today, millions of loyal users across the globe continue to enjoy the best betting experience with TOP11!
                            </p>
                            <div className="w-full flex flex-col items-center md:items-end mt-6 md:pr-16">
                                <div className="grid grid-cols-4 gap-2">
                                    {Crick_Images.map((src, index) => (
                                        <motion.img
                                            key={index}
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="cursor-pointer w-full h-full object-cover rounded-2xl"
                                            whileHover={{scale: 1}}
                                            onClick={() => openLightbox(Crick_Images, index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                alt="A character with blue hair and armor, holding a weapon, in a dynamic pose"
                                className=" rounded-lg"
                                height="400"
                                src={crickt_one}
                                width="600"
                            />
                        </div>

                    </div>
                </div>


                <div className=" py-28">
                    <div className="px-20 mx-auto ">
                        <hr className="border-t-1 border-yellow-300"/>
                        <br/>
                        <div className="w-xl">
                            <h2 className=" text-themeYellow text-2xl mb-4">We operate with full legal
                                authorization under our official license</h2>

                        </div>

                        <div className="grid grid-cols-6 sm:grid-cols-6 gap-4 mt-8">
                            {LicenImages.map((src, index) => (
                                <motion.img
                                    key={index}
                                    src={src}
                                    className="cursor-pointer w-full h-full object-cover rounded-2xl"
                                    onClick={() => (window.location.href = "https://top11help.toptube.vip/docs/docly-documentation/licencing-verification-ezd_ampersand-security/what-are-the-legal-licenses-for-casino-gambling/alderney-gambling-control-commission-agcc/")}
                                />
                            ))}
                        </div>


                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setIsOpen(false)}
                        >
                            <motion.img
                                src={activeImageArray[photoIndex]} // Use the active array
                                alt={`Enlarged gallery image ${photoIndex + 1}`}
                                className="max-w-full max-h-full"
                                initial={{scale: 0.8}}
                                animate={{scale: 1}}
                                exit={{scale: 0.8}}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Footer/>
        </div>
    );
};

export default Sponsor;

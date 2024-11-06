import React, {useState} from 'react';
import bg_image from "../images/sponsor/back-top.jpg";
import logo from "../images/logo/logo-white.webp";
import { FaFacebook, FaTwitter, FaTelegram, FaWhatsapp,   } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
const Sponsor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [activeImageArray, setActiveImageArray] = useState([]);

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
        football_one,
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
        <>
            <div
                className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
                <img src={bg_image} className="absolute top-0 left-0 min-h-full object-cover" alt="" />

                {/* Fixed Navbar with Glass Effect */}
                <div
                    className="fixed max-w-screen mx-auto top-0 left-0 w-full z-30 bg-white/20 backdrop-blur-lg py-3 px-4 md:px-6 lg:px-24 xl:px-72 flex justify-between items-center">
                    <img src={logo} alt="Logo" onClick={()=> ( window.location.href="/")}  className="h-12 md:h-16 cursor-pointer"/>

                    <div className="flex gap-2 md:gap-4 text-white">
                        <FaFacebook
                            className="cursor-pointer hover:opacity-80 hover:text-white text-themeYellow text-2xl md:text-3xl"/>
                        <FaTwitter
                            className="cursor-pointer hover:opacity-80 hover:text-white text-themeYellow text-2xl md:text-3xl"/>
                        <FaTelegram
                            className="cursor-pointer hover:opacity-80 hover:text-white text-themeYellow text-2xl md:text-3xl"/>
                        <FaWhatsapp
                            className="cursor-pointer hover:opacity-80 hover:text-white text-themeYellow text-2xl md:text-3xl"/>
                    </div>
                </div>

                {/* Scroll Button */}
                <button
                    onClick={handleScrollDown}
                    className="flex absolute bottom-10 left-1/2 transform -translate-x-1/2 text-themeYellow animate-pulse z-10 uppercase py-2 px-6 text-sm md:py-3 md:px-10 md:text-base border border-themeYellow hover:bg-sky-950 hover:bg-opacity-10 cursor-pointer"
                    aria-label="Scroll down"
                    id="target-section">
                    Explore Origin of Top11 and Introduction
                </button>
            </div>


            <div className="bg-themeYellow py-20">
                <div className="max-w-screen-lg mx-auto px-8 sm:px-8 lg:px-0 ">
                    <div className="w-xl">
                        <h2 className="font-black text-sky-950 text-5xl mb-4">Introduction</h2>
                        <p className="text-base text-sky-950">TOP11 is a global sports betting website, founded in 2012
                            in the United Kingdom. The platform offers a wide range of sports events and diversified
                            entertainment projects, catering to players worldwide. Over the years, TOP11 has built a
                            reputation for providing an exciting and seamless betting experience, attracting millions of
                            loyal players across the globe.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                        {IntroImages.map((src, index) => (
                            <motion.img
                                key={index}
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="cursor-pointer w-full h-full object-cover rounded-2xl"
                                whileHover={{scale: 1.05}}
                                onClick={() => openLightbox(IntroImages, index)}
                            />
                        ))}
                    </div>


                </div>
            </div>

            <div className="py-12 relative overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-0 md:gap-8 lg:gap-0">

                    {/* Left Column - Memories Section */}
                    <div className="w-full flex flex-col items-center md:items-end md:pr-16">
                        <div className="block">
                            {Football_feildImages.map((src, index) => (
                                <motion.img
                                    key={index}
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="cursor-pointer w-full h-full object-cover rounded-2xl"
                                    whileHover={{scale: 1.05}}
                                    onClick={() => openLightbox(Football_feildImages, index)}
                                />
                            ))}
                        </div>

                        {/* Lightbox Overlay */}

                        <div className="w-full md:h-full mt-auto overflow-hidden relative">
                            <video className="w-full h-auto md:h-full" controls>
                                <source src={football_video} type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    {/* Right Column - Sponsor Section */}
                    <div
                        className="order-1 py-12 md:py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-themeBlue before:top-0 before:left-0">
                        <div className="relative z-20 p-6 md:pl-12">
                            <h2 className="text-themeYellow font-black text-3xl md:text-5xl leading-snug mb-6 md:mb-10">
                                Sponsor<br className="hidden md:block"/> of football field
                            </h2>
                            <p className="text-white text-sm md:text-base">
                                Top11 and PSV have come together to embody the shared mission of "achieving greatness
                                together". This collaboration brings the world's most prestigious sports events to life,
                                offering an unparalleled interactive entertainment experience for fans and platform
                                users alike, with moments of excitement and enjoyment at every turn.
                                <br/>
                                <br/>
                                Top11 signed an official partnership with PSV Football Club in 2018, marking a new
                                chapter in global sports collaboration. Together with PSV, Top11 is dedicated to
                                advancing the future of sports and ushering in a new era of sports entertainment,
                                delivering an experience that redefines the connection between fans and the game.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4 relative overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-8 md:gap-0 lg:gap-16">

                    {/* Left Column - Sponsor Gallery Football */}
                    <div
                        className="py-10 md:py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-themeYellow before:top-0 before:right-0">
                        <div className="relative z-20 p-6 md:pl-12">
                            <h2 className="text-sky-950 font-black text-3xl md:text-5xl leading-snug mb-6 md:mb-10">
                                Sponsor Gallery Football
                            </h2>
                            <h3 className="text-sky-950 font-black text-lg md:text-xl leading-snug mb-6 md:mb-10">
                                PSV Eindhoven official partner - Top11
                            </h3>
                            <p className="text-sky-950 text-sm md:text-base">
                                PSV Eindhoven's triumph this season showcases the power of dedication and teamwork!
                                Top11 is proud to stand alongside PSV Eindhoven in celebrating this remarkable victory.
                            </p>


                            <div className="w-full flex flex-col items-center md:items-end mt-6 md:pr-16">
                                <div className="grid grid-cols-3 gap-2">
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

                    {/* Right Column - Assistance Section */}
                    <div className="w-full flex flex-col items-center md:items-end md:pr-16 gap-4">
                        <div className="block">
                            <img src={football_one} className=" w-full h-full object-cover rounded-2xl"/>

                        </div>

                        {/* Lightbox Overlay */}

                        <div className="w-full md:h-full mt-auto overflow-hidden relative">
                            <img src={football_six} className=" w-full h-full object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-12 relative overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-0 md:gap-8 lg:gap-0">

                    {/* Left Column - Memories Section */}
                    <div className="w-full flex flex-col items-center md:items-end md:pr-16 gap-4">
                        <h2 className="text-themeBlue font-black text-3xl md:text-3xl leading-snug mb-6 md:mb-10">
                            Sponsor Gallery Cricket <br/>
                        </h2>


                        <img
                            src={crickt_one}
                            className="cursor-pointer w-full h-full object-cover rounded-2xl"
                        />


                        <img
                            src={crickt_two}
                            className="cursor-pointer w-full h-full object-cover rounded-2xl"
                        />
                        {/* Lightbox Overlay */}

                        <div className="w-full md:h-full mt-auto overflow-hidden relative">
                            <video className="w-full h-auto md:h-full" controls>
                                <source src={cricket_video} type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    {/* Right Column - Sponsor Section */}
                    <div
                        className="order-1 py-12 md:py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-themeBlue before:top-0 before:left-0">
                        <div className="relative z-20 p-6 md:pl-12">
                            <h2 className="text-themeYellow font-black text-3xl md:text-5xl leading-snug mb-6 md:mb-10">
                                Sponsor<br className="hidden md:block"/>of cricket field
                            </h2>
                            <p className="text-white text-sm md:text-base">
                                As the leading global sports entertainment brand, Top11 signed a contract with Jaffna
                                Stallions in 2020, becoming the official partner of the Lanka Premier League.
                                <br/>
                                <br/>
                                Top11 signed an official partnership with PSV Football Club in 2018, marking a new
                                chapter in global sports collaboration. Together with PSV, Top11 is dedicated to
                                advancing the future of sports and ushering in a new era of sports entertainment,
                                delivering an experience that redefines the connection between fans and the game.
                                <br/>
                                <br/>
                                TOP11 is one of the leading global sports betting platforms, founded in the UK in 2012.
                                Backed by a professional technical team, TOP11 develops gaming content that caters to
                                players worldwide. We offer thrilling sports events and a wide range of entertainment
                                options. Most importantly, we are committed to delivering the ultimate gaming experience
                                for all our players.
                                <br/>
                                <br/>
                                Today, millions of loyal users across the globe continue to enjoy the best betting
                                experience with TOP11!


                                <div className="w-full flex flex-col items-center md:items-end mt-6 md:pr-16">
                                    <div className="grid grid-cols-3 gap-2">
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


                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-themeYellow py-20">
                <div className="max-w-screen-lg mx-auto px-8 sm:px-8 lg:px-0 ">
                    <div className="w-xl">
                        <h2 className="font-black text-sky-950 text-2xl mb-4">We operate with full legal authorization under our official license</h2>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
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
        </>
    );
};

export default Sponsor;

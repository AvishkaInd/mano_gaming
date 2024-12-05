import React, {useState} from 'react';
import {Footer, Header} from "../components";
import bgOverlay from "../images/Background.png";
import {PromotionsData} from  "../Data/index";
import cap_promotion from "../images/category_names/PROMOTIONS.png";
import banner from "../images/promotion/banner.png";
const Promotions = () => {

        const [selectedBanner, setSelectedBanner] = useState(null);
        const [bannerButton, setSelectedbannerButton] = useState(null);

        const handleImageClick = (bannerKey) => {
            setSelectedBanner(PromotionsData[bannerKey]);
            setSelectedbannerButton(PromotionsData[bannerKey].button)
        };

        const closePopup = () => {
            setSelectedBanner(null);
        };

        return (
            <>
                <div style={{
                    backgroundImage: `url(${bgOverlay})`,
                    height: '100%',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <Header/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <img src={banner} className='w-screen' />
                    <br/>

                    <div className="banner-container grid grid-cols-2 gap-4">
                        {Object.keys(PromotionsData).map((key) => (

                            <div key={key} className="banner-item">
                                <img
                                    src={PromotionsData[key].image}
                                    alt={PromotionsData[key].caption}
                                    onClick={() => handleImageClick(key)}
                                    className="banner-image"
                                />
                                <div className="banner-caption">{PromotionsData[key].caption}</div>
                            </div>

                        ))}
                    </div>
                    <br/>
                    <br/>
                    <Footer/>
                </div>

                {/* Popup */}
                {selectedBanner && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}
                             style={{
                                 backgroundImage: `url(${bgOverlay})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 backgroundRepeat: 'no-repeat',
                                 }}
                        >
                            <img src={selectedBanner.image} alt={selectedBanner.caption} className="popup-image"/>
                            <div className="content-scroller">
                                <h2 className="popup-title text-themeBlue font-extrabold bg-themeYellow rounded p-2">{selectedBanner.caption}</h2>
                                <div
                                    className="popup-text text-white"
                                    dangerouslySetInnerHTML={{__html: selectedBanner.content}}
                                ></div>
                            </div>
                            {selectedBanner.button && (
                                <button className="popup-close-button" onClick={() => (window.location.href = 'https://www.top11india.com/register')}>
                                    {selectedBanner.button}
                                </button>
                            )}
                        </div>
                    </div>
                )}

            </>
        );

};

export default Promotions;
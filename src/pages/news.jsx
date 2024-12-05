import React from 'react';
import bgOverlay from "../images/Background.png";
import {Footer, Header} from "../components";

const News = () => {
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
                <div className="h-screen">
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
                <Footer/>
            </div>
        </>
    );
};

export default News;
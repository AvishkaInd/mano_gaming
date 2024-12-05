import React from 'react';
import {
    Header,
    Slider,
    TabSlider,
    Footer,
    Cards,
    DescColumn,
    TabContent,
    Announcements,
    FloatingButton
} from "../components";
import Caption from "../components/caption";
import {useState} from "react";
import {Tabmenus} from "../Data/index";
import bgOverlay from "../images/Background.png";
import popular_caption from "../images/Main Texts/Popular.png";
import service_caption from "../images/Main Texts/Services.png";
import download_caption from "../images/Main Texts/Download.png";
import HeaderTest from "../components/Header_test";
const Home = () => {
    const [selectedTab, setSelectedTab] = useState(Object.keys(Tabmenus)[0]);
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (

        <div className='body_wrapper'>
            {/*<Header/>*/}
            <Header/>
            <Slider/>
            <div style={{
                backgroundImage: `url(${bgOverlay})`,
                height:'100%',
                width:'100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Caption image={popular_caption}/>
                <TabSlider onTabChange={handleTabChange}/>
                <TabContent activeTab={selectedTab}/>
                <br/>
                <FloatingButton/>
                <br/>
                <Caption image={download_caption}/>
                <br/>
                <DescColumn/>
                <Caption image={service_caption}/>
                <Cards/>
                <Announcements/>
                <Footer/>

            </div>

        </div>
    );
};

export default Home;
import './App.css';
import {Header, Slider, TabSlider, Footer, Cards, DescColumn, TabContent} from "./components/index";
import Caption from "./components/caption";
import {useState} from "react";
import {Tabmenus} from "./schema/index";
function App() {
    const [selectedTab, setSelectedTab] = useState(Object.keys(Tabmenus)[0]);
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (

        <div className='body_wrapper'>
            <Header/>
            <Slider/>
            <Caption name="Popular  Caption here"/>
            <TabSlider onTabChange={handleTabChange}/>
            <TabContent activeTab={selectedTab}/>
            <br/>
            <br/>
            <Caption name="Download  Caption here"/>
            <br/>
            <DescColumn/>
            <Caption name="Services Caption here"/>
            <Cards/>
            <Footer/>
        </div>
    );
}

export default App;
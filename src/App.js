import './App.css';
import Home from "./pages/home";
import Sponsor from "./pages/sponser";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sponsor" element={<Sponsor />} />
            </Routes>
        </Router>
    );
    // const [selectedTab, setSelectedTab] = useState(Object.keys(Tabmenus)[0]);
    // const handleTabChange = (tab) => {
    //     setSelectedTab(tab);
    // };
    // return (
    //
    //     <div className='body_wrapper'>
    //         <Header/>
    //         <Slider/>
    //         <div style={{
    //             backgroundImage: `url(${bgOverlay})`,
    //             height:'100%',
    //             width:'100%',
    //             backgroundSize: 'cover',
    //             backgroundPosition: 'center',
    //             backgroundRepeat: 'no-repeat',
    //         }}>
    //             <Caption image={popular_caption}/>
    //             <TabSlider onTabChange={handleTabChange}/>
    //             <TabContent activeTab={selectedTab}/>
    //             <br/>
    //             <br/>
    //             <Caption image={download_caption}/>
    //             <br/>
    //             <DescColumn/>
    //             <Caption image={service_caption}/>
    //             <Cards/>
    //             <Footer/>
    //
    //         </div>
    //
    //     </div>
    // );
}

export default App;
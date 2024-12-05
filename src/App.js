import './App.css';
import Home from "./pages/home";
import Sponsor from "./pages/sponser";
import {isMobile} from 'react-device-detect';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Promotions from "./pages/promotions";
import News from "./pages/news";
function App() {
    if(!isMobile){
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sponsor" element={<Sponsor />} />
                    <Route path="/promotion" element={<Promotions />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </Router>
        );
    }else{
        window.location.href='https://www.top11india.com/';
    }
    

}

export default App;
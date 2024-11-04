import './App.css';
import {Header, Slider, TabSlider, Footer, Cards, DescColumn} from "./components/index";
import Caption from "./components/caption";
function App() {
    return (
        <div className='body_wrapper'>
                <Header/>
                <Slider/>
                <Caption name="Popular  Caption here"/>
                <TabSlider/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <DescColumn/>
                <Caption name="Services Caption here"/>
                <Cards/>
                <Footer/>
        </div>
    );
}

export default App;
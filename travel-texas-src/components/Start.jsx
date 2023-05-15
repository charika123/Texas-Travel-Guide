import '../styles.css';
import bgImage1 from '../images/bgImg1.jpg';
import bgImage2 from '../images/bgImg2.jpg';
import bgImage3 from '../images/bgImg3.jpg';
import bgImage4 from '../images/bgImg4.jpg';
import bgImage5 from '../images/bgImg5.jpg';
import bgImage7 from '../images/bgImg7.jpg';
import bgImage8 from '../images/bgImg8.jpg';
import bgImage9 from '../images/bgImg9.jpg';
import bgImage10 from '../images/bgImg10.jpg';
import bgImage11 from '../images/bgImg11.jpg';
import bgImage12 from '../images/bgImg12.jpg';
import bgImage13 from '../images/bgImg13.jpg';
import logo from '../images/logo.png';
import { RxArrowRight } from "react-icons/rx";

const imageIndex = () => {
    let index = Math.floor(Math.random()*13)
    return index
}
const Start = () => {
    const images = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5, bgImage7, bgImage8, bgImage9, bgImage10, bgImage11, bgImage12, bgImage13]
    const index = imageIndex()

    return(
        <>
         <div className="start" style={{ backgroundImage: `url(${images[index]})` }}>
            <img src={logo} className="logo"></img>
            <h className="Title">Howdy!</h>
        </div>
        <div className="start-content">
        <div className="container">
        <h1>Texas</h1>
        <button onClick={() => { window.location.href = "https://www.traveltexas.com" }}>traveltexas.com <RxArrowRight className='arrow'/></button> 
        </div>
        <div className='sub-content'>
        <h className="slogan">Where everything is bigger...</h>
        <h className='slogan-sub-content'>Bigger than a whole heap of countries, Texas is vast, diverse and welcoming: from big-city lights to small-town simplicity, white-sand beaches to high-country hikes.</h>
        <p className='start-paragraph'>'Country' is as much about a way of life as a place. Slowing down, taking the rural, farm-to-market back roads; steppin' out in polished boots and starched blue jeans for a Saturday-night dance under the stars; doin' nothing more on a Sunday afternoon than floating down a lazy river… Life in the country lopes along. Even if most Texans now live in urban areas, they're influenced by the state's agricultural, roping-and-riding heritage – and they escape to the country just as often as they can.From the beautiful beaches of the Texas Gulf Coast to the rugged mountains of Big Bend, Texas is full of fascinating destinations, breathtaking landscapes, and a unique culture all its own. Whether you're savoring Texas wine in the Hill Country, exploring historic Spanish missions, or watching the cattle drive at the Fort Worth Stockyards, you'll find there's no shortage of amazing adventures here in the Lone Star State. Discover all the places to see, things to do, events, and more with your free copy of the Texas State Travel Guide. </p>
        </div>
        </div>
        </>
    );
}

export default Start
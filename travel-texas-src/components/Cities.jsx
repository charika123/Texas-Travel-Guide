import '../styles.css'
import dallasImg from '../images/Dallas.jpg';
import houstonImg from '../images/Houstonr.jpg';
import austinImg from '../images/Austinr.jpg';
import fortworthImg from '../images/FortWorthr.jpg';

const Cities = () =>{
    const cityCards = [
        {cityName: "Dallas",
         imageUrl: dallasImg},
        {cityName: "Houston",
         imageUrl: houstonImg},
        {cityName: "Austin",
         imageUrl: austinImg},
        {cityName: "FortWorth",
         imageUrl: fortworthImg}
    ]
    return(
        <section>
        <h className="cities-title">Explore some popular cities!</h>
        <div className="cities">
      {cityCards.map((city) => (
      <div className="card" key={city.cityName}>
        <div className="image-container">
          <img src={city.imageUrl} className="city-image" alt={city.cityName} />
          <div className="overlay">
            <p>{city.cityName}</p>
          </div>
        </div>
      </div>
            ))}
        </div>
        <div className="bottom-space"><p>Charika Jangili</p></div>
        </section>
    );
}

export default Cities
import '../';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';
import outdoors1 from '../images/outdoors1.jpg';
import outdoors2 from '../images/outdoors2.jpg';
import outdoors3 from '../images/outdoors3.jpg';
import outdoors4 from '../images/outdoors4.jpg';

const About = () => {
    const food = [
        {image: food1,
         place: "Odd Duck",
         city: "Austin"},
        {image: food2,
         place: "Kitchen713",
         city: "Houston"},
        {image: food3,
         place: "Fearings",
         city: "Dallas"},
        {image: food4,
         place: "Swiss Pastry Shop",
         city: "Fort Worth"}
        ]
    const outdoors = [
       {image: outdoors1,
        place: "Big Bend National Park"},
       {image: outdoors2,
        place: "Texas State Fair",
        city: "Dallas"},
       {image: outdoors3,
        place: "River Walk",
        city: "San Antonio"},
       {image: outdoors4,
        place: "Boca Chica"}
       ]
    const aboutData = [
        {id: 1,
         subHeading: "Fun & Delicious Food",
         content: "There's just something about eating a big pile of brisket off a butcher-paper 'plate.' Don't dare ask for a fork; the best BBQ is for fingers only. And great barbecue is not the state's only fun food. At festivals, rodeos and fairs much of your meal can be served on a stick, from corny dogs to fried PB&J sandwiches. In Austin and other cities the food truck phenomenon continues. And we haven't even dug into the ubiquitous Mexican food, Dallas' fine upscale dining or the foodie-fave restaurants around Houston." },
         {id: 2,
          subHeading: "The Great Big Outdoors",
          content: "We know you've heard, but Texas is big…really BIG. More than 261,000 sq miles, in fact: that's larger than Germany, England, Scotland, Ireland, Northern Ireland, Belgium and the Netherlands combined. And it ain't all just tumblin’ tumbleweeds. Barrier islands with windswept dunes and public beaches stretch down 367 miles of coastline. In the west, three mountain ranges top more than 7000ft, and Big Bend National Park is the state's premier trekking and primary rafting destination."
         }
    ]
    return(
        <>
        <div className = "about-data">
        {aboutData.map((item) => (
          <span className="about-second-data">
          <h className="sub-heading" key={item.id}>{item.subHeading}</h>
          <p className="content">{item.content}</p>
          </span>
      ))}
        </div>
        <div className="image-div">
            <div className='food-container'>
            {food.map((foodImage) => (
                <span className="food image-container">
                <img className='content-images'src={foodImage.image}></img>
                <p className="place">{foodImage.place}</p>
                <p className="city">{foodImage.city}</p>
                </span>
            ))}
            </div>
            <div className='outdoors-container'>
            {outdoors.map((outdoorsImage) => (
                <span className="outdoors image-container">
                <img className='content-images'src={outdoorsImage.image}></img>
                <p className="place">{outdoorsImage.place}</p>
                <p className="city">{outdoorsImage.city}</p>
                </span>
            ))}
            </div>
        </div>
        </>
    );
}

export default About
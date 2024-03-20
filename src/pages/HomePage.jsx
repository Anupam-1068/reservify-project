import './HomePage.css';
import HomeImage from '../assets/Image1.jpg';
import Button from 'react-bootstrap/Button';
import PlaceCarousel from '../components/Carousels/PlaceCarousel';



const HomePage = () => {
    return (
        <div>
            <div className="blurryImageContainer">
                <img className="blurryImage" src={HomeImage} alt="HomeImage" />
                <div class="bottom-left">STOCKMANN | TOP FLOOR CAFE</div>

            </div>
            
            <div className="centerText">
                    <p>Empowering your study journey — Reservify, where space meets efficiency!</p>
                </div>
            <h2>
                    Top Picks
            </h2>
            <div>
                <PlaceCarousel></PlaceCarousel>
            </div>
        
            <div className="centerText">
                <p>Reservify revolutionizes the way you secure study spaces! 
                    This brings a seamless and user-friendly experience to the process of reserving study rooms 
                    and collaborative areas within educational institutions in Tallinn. Whether you're a student, 
                    researcher, or professional, Reservify ensures you have instant access 
                    to the perfect study environment, enhancing productivity and fostering collaboration.</p>
            </div>
            <div className="mb-2">
            <Button href="/bookSpot">Book Spot</Button>
            </div>
        </div>
    );
};

export default HomePage;
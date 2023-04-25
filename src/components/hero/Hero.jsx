import './Hero.scss'
import heroImg from "../../../public/assets/hero-img.png"
const Hero = () => {
    return ( 
        <div className="hero">
            <div className="left">
                <p>Electronic hub</p>
                <h1>The smarter way to listen to music </h1>
                <p className="info">Elevate your audio experience with our state-of-the-art wireless headsets. Browse now and feel the difference!</p>
                <button>Shop Now</button>
            </div>
            <div className="right">
                <img src={heroImg} alt="" />
            </div>
        </div>
     );
}
 
export default Hero;
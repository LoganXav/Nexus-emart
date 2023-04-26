import { Link } from "react-router-dom";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="left">
          <p>Electronic hub</p>
          <h1>The smarter way to listen to music </h1>
          <p className="info">
            Elevate your audio experience with our state-of-the-art wireless
            headsets. Browse now and feel the difference!
          </p>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="right">
          <img src="../../assets/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

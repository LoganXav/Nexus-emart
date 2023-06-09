import "./Hero.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';
import heroImg from "../../../public/assets/hero-img.png"

const Hero = () => {

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1.5,
            }}
          >
            Electronic hub
          </motion.p>
          <h1>The smarter way to listen to music </h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1.5,
            }}
            className="info"
          >
            Elevate your audio experience with our state-of-the-art wireless
            headsets. Browse now and feel the difference!
          </motion.p>
          <Link to="/shop">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1.5,
              }}
              whileHover={{
                y: -15,
                backgroundColor: "black",
                color: "#fff",
                border: "none",
              }}
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
        <div className="right">
         
            <img
              src={heroImg}
              alt="heroImg"
            />
       
        </div>
      </div>
    </div>
  );
};

export default Hero;

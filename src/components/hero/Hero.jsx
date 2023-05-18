import "./Hero.scss";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const Hero = () => {
  const { data, loading, error } = useFetch(
    "/products?populate=*&[filters][type][$eq]=hero"
  );

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 4,
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
              delay: 4,
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
                delay: 4,
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
          {loading ? (
            "loading..."
          ) : error ? (
            "Something went wrong"
          ) : (
            <img
              src={
                import.meta.env.VITE_APP_UPLOAD_URL +
                data[0]?.attributes?.img.data.attributes.url
              }
              alt="heroImg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

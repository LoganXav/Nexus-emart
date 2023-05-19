import "./creativeFeatures.scss";
import useFetch from "../../hooks/useFetch";
import { motion, AnimatePresence } from "framer-motion";

const CreativeFeatures = () => {
  const { data, loading, error } = useFetch(
    "/products?populate=*&[filters][type][$eq]=creative"
  );

  return (
    <div className="creative">
      <div className="left">
        {loading ? (
          "loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <img src="https://emart.wpthemedemos.com/electronic-gadget/wp-content/uploads/sites/13/2022/12/last-sec-left-img-1024x788.webp" />
        )}
      </div>
      <div className="right">
        <h1>Creative Features</h1>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="feature"
        >
          <div className="icon">
            <i className="ri-gamepad-line"></i>
          </div>
          <div className="text">
            <h2>Best controllers</h2>
            <p>
              Experience the ultimate level of control and immersion with our
              top-rated controllers for your Oculus VR system.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="feature"
        >
          <div className="icon">
            <i className="ri-sound-module-line"></i>
          </div>
          <div className="text">
            <h2>Customize settings</h2>
            <p>
              Unlock a new level of personalization and optimize your VR
              experience with our easy-to-use settings.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="feature"
        >
          <div className="icon">
            <i className="ri-tv-line"></i>
          </div>
          <div className="text">
            <h2>High end display</h2>
            <p>
              Immerse yourself in stunningly realistic visuals with the high-end
              display technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeFeatures;

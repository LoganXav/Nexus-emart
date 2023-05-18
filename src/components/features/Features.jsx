import "./Features.scss";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Free shipping",
      desc: "Get your products delivered straight to your doorstep without any additional costs.",
      icon: <i className="ri-shopping-cart-line"></i>,
    },
    {
      id: 2,
      name: "100% Original product",
      desc: "Rest assured that all products on our website are 100% original and sourced directly from the manufacturer.",
      icon: <i className="ri-award-line"></i>,
    },

    {
      id: 3,
      name: "Gift cards",
      desc: "Choose from a variety of denominations and let your loved ones choose their own perfect gift.",
      icon: <i className="ri-gift-line"></i>,
    },

    {
      id: 4,
      name: "Tracking & delivery",
      desc: " Know exactly when your package will arrive and enjoy peace of mind knowing it's on its way.",
      icon: <i className="ri-truck-line"></i>,
    },
  ];
  return (
    <div className="features">
      <AnimatePresence>
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0 + index * 0.25,
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1,
            }}
            viewport={{ once: true }}
            className="feature"
            key={feature.id}
          >
            {feature.icon}
            <h2>{feature.name}</h2>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Features;

import "./Deals.scss";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const Deals = () => {
  const { data, loading, error } = useFetch(
    "/products?populate=*&[filters][type][$eq]=deal"
  );

  return (
    <div className="deals">
      <div className="top">
        <h2>Deal on gadgets</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          Save big on the latest gadgets and electronics. Shop today!
        </motion.p>
      </div>
      {loading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="bottom">
          {data.map((deal, i) => (
            <Card key={deal.id} item={data} i={i} />
          ))}
        </div>
      )}
      <Link className="link" to="/shop">
        <motion.button
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: .5,
          }}
          viewport={{ once: true }}
        >
          More Collection
        </motion.button>
      </Link>
    </div>
  );
};

export default Deals;

import Card from "../card/Card";
import "./newCollection.scss";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const NewCollection = () => {
  const { data, loading, error } = useFetch(
    "/products?populate=*&[filters][type][$eq]=new"
  );

  return (
    <div className="newCollection">
      <div className="top">
        <h3>New collection</h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          Wand crossbow phoenix levicorpus sirius. Easy raw-steak half-blood
          petrified veela house lupin it.
        </motion.p>
      </div>
      {loading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="bottom">
          {data.map((collection, i) => (
            <Card key={collection.id} item={data} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewCollection;

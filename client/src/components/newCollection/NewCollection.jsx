import Card from "../card/Card";
import "./newCollection.scss";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

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
          Introducing our latest electrifying collections, where innovation
          meets style in the world of electronics.
        </motion.p>
      </div>
      {loading ? (
        <div className="circle">
          <CircularProgress />
        </div>
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="bottom">
          <div className="container">
            {data.map((collection, i) => (
              <Card key={collection.id} item={data} i={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCollection;

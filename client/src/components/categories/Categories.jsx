import "./Categories.scss";
import useFetch from "../../hooks/useFetch";
import { motion, AnimatePresence } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");

  return (
    <div className="categories-container">
      <div className="categories">
        <div className="top">
          <h1>Shop by categories</h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            We offer a wide range of electronics products to meet all your
            needs. Browse and shop for your favourite products.
          </motion.p>
        </div>
        {loading ? (
            <div className="circle"><CircularProgress /></div>
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="bottom">
            <AnimatePresence>
              {data.map((category, index) => (
                <motion.div
                  className="category"
                  key={category.id}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0 + index * 0.3,
                    ease: [0.6, 0.01, 0.05, 0.9],
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="image">
                    <img
                      src={
                        import.meta.env.VITE_APP_UPLOAD_URL +
                        category?.attributes?.img?.data?.attributes?.url
                      }
                      alt=""
                    />
                  </div>
                  <h3>{category?.attributes?.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

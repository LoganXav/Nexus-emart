import "./Shop.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const Shop = () => {
  const [value, setValue] = useState(100000);
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][price][$lte]=${value}${
      category ? `&[filters][categories][desc][$eq]=${category}` : ""
    }${type ? `&[filters][type][$eq]=${type}` : ""}`
  );

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setType(null);
    setCategory(category);
  };
  const handleTypeChange = (type) => {
    setCategory(null);
    setType(type);
  };

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={divRef} className="shop">
      <div className="top">
        <div className="breadcrumbs">
          <div>
            <Link className="link" to="/">
              Home
            </Link>{" "}
            / Shop
          </div>
        </div>
        <div className="filter-options">
          <div className="left">
            {data.length === 0 ? (
              <p>No matches found</p>
            ) : data.length === 1 ? (
              <p>Showing single match found</p>
            ) : (
              <p>Showing all {data.length} matches</p>
            )}
          </div>
          <div className="right">
            <span onClick={() => setFilterOpen(!filterOpen)}>Filters</span>
            <i className="ri-sound-module-line"></i>
            <hr />
            <span>Default Sorting</span>
            <i className="ri-arrow-up-down-fill"></i>
          </div>
        </div>
      </div>
      {filterOpen && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1.5,
          }}
          className="filter-container"
        >
          <div className="headings">
            <h3>Product Categories</h3>
            <h3>Filter by price</h3>
          </div>
          <div className="options">
            <div className="category-options">
              <span onClick={() => handleCategoryChange(null)}>All</span>
              <span onClick={() => handleCategoryChange("audio")}>Audio</span>
              <span onClick={() => handleCategoryChange("gaming")}>Gaming</span>
              <span onClick={() => handleCategoryChange("visual")}>Visual</span>
              <span onClick={() => handleTypeChange("new")}>
                New Collection
              </span>
              <span onClick={() => handleTypeChange("deal")}>Deals</span>
            </div>
            <div className="price">
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={value}
                onChange={handleChange}
                className="input"
              />
              <div className="price-container">
                <input type="text" defaultValue={`N ${1000}`} />
                <input type="text" value={`N ${value}`} />
              </div>
              <p className="reset" onClick={() => setValue(1000)}>
                Reset
              </p>
            </div>
          </div>
        </motion.div>
      )}
      <div className="bottom-container">
        {loading ? (
          "loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="bottom">
            {data.map((product, i) => (
              <Card item={data} key={product.id} i={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

import "./Search.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    setQuery(state);
  }, [state]);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][title][$containsi]=${query}`
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleSearch = () => {
    setQuery(search);
  };

  console.log("state", state);
  console.log("data", data);
  console.log("products", products);

  return (
    <div className="shop">
      <div className="top">
        <div className="breadcrumbs">
          <Link className="link" to="/">
            Home
          </Link>{" "}
          /<span> Search Results for "{query}"</span>
        </div>
        <div className="input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
          />
          <i
            onClick={handleSearch}
            style={{ cursor: "pointer", color: "lightgray" }}
            className="ri-search-line"
          ></i>
        </div>
      </div>
      <div className="bottom">
        {products.length === 0 ? (
          <div className="nothing">
            <h1>Oops! Nothing Found</h1>
            <p>
              Sorry! but nothing matched your search terms. Please try again
              with some different keywords.
            </p>
          </div>
        ) : (
          <div className="result">
            <h2>Search results for "{query}"</h2>
            {loading ? (
              "loading..."
            ) : error ? (
              "Something went wrong"
            ) : (
              <div className="card-container">
                <div className="container">
                  {products.map((product, i) => (
                    <Card key={product.id} item={products} i={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

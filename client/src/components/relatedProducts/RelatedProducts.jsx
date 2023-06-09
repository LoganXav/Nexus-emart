import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import "./relatedProducts.scss";
import CircularProgress from "@mui/material/CircularProgress";

export const RelatedProducts = ({ category }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][desc][$eq]=${category}`
  );
  return (
    <div className="products">
      <div className="header">
        <h2>Related Products</h2>
      </div>
      {loading ? (
        <div className="circle">
          <CircularProgress />
        </div>
      ) : (
        <div className="bottom">
          <div className="container">
            {data.map((item, i) => (
              <Card key={item.id} item={data} i={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item, i }) => {
  const productId = item[i].id;

  return (
    <>
      <Link to={`/product/${productId}`} className="card link">
        <div className="image">
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item[i]?.attributes?.img?.data?.attributes?.url
            }
          />
          {item[i]?.attributes.oldPrice && (
            <span>
              - {(
                ((item[i]?.attributes?.oldPrice - item[i]?.attributes?.price) /
                  item[i]?.attributes?.oldPrice) *
                100
              ).toFixed(0)} %
              
            </span>
          )}
        </div>
        <h3>{item[i]?.attributes?.title}</h3>
        <div className="price">
          {item[i]?.attributes?.oldPrice && (
            <p className="old">
              N{" "}
              {item[i]?.attributes?.oldPrice ||
                item[i]?.attributes?.price + 2000}
            </p>
          )}
          <p>
            <b>N {item[i]?.attributes?.price}1</b>
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;

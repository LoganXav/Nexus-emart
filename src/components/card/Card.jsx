import "./Card.scss";
import { Link } from "react-router-dom";


const Card = ({ item, i }) => {
  const productId = item[i].id;

  return (
    <>
      <Link className="link" to={`/product/${productId}`}>
        <div className="card">
          <div className="image">
            <img src={item[i].img} />
            {item[i]?.discount && <span>{item[i].discount}</span>}
          </div>
          <h3>{item[i].name}</h3>
          <div className="price">
            {item[i]?.oldPrice && <p className="old">$ {item[i].oldPrice}</p>}
            <p>$ {item[i].newPrice}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

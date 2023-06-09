import { Link } from "react-router-dom";
import "./Goods.scss";
const Goods = () => {
  return (
    <div className="goods">
      <div className="left half">
        <div className="left-details">
          <h2>Up to 60% off Electronics goods</h2>
          <p>
            Unbeatable savings! Enjoy up to 60% off on top-notch electronic
            goods at our online store.
          </p>
          <Link className="link" to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="right-container half">
        <div className="right">
          <h2>Up to 60% off Electronic goods</h2>
          <img src="../../assets/spy-drone.png" alt="" />
          <Link className="link" to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Goods;

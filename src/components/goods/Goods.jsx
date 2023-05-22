import { Link } from "react-router-dom";
import "./Goods.scss";
const Goods = () => {
  return (
    <div className="goods">
      <div className="left half">
        <div className="left-details">
          <h2>Up to 60% off Electronics goods</h2>
          <p>
            Wand crossbow phoenix levicorpus sirius. Easy raw-steak half-blood
            petrified veela house lupin it.
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

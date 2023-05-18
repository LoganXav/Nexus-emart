import { Link } from "react-router-dom";
import "./Goods.scss";
const Goods = () => {
  return (
    <div className="goods">
      <div className="left half">
        <video autoPlay loop muted src="../../assets/goods-video1.mp4"></video>
      </div>
      <div className="right-container half">
        <div className="right">
          {/* <h1>Up to 60% off Electronic goods</h1>
          <img src="../../assets/spy-drone.png" alt="" /> */}
          <Link className="link" to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Goods;

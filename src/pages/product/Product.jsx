import "./Product.scss";
const Product = () => {
  return (
    <div className="product">
        <span className="breadcrumbs">Home / Audio / Alexa Smart Speaker</span>
      <div className="top">
        <div className="product-display">
          <div className="left">
            <img src="../../assets/google-speaker.png" alt="" />
          </div>
          <div className="right">
            <div className="product-name">
              <h2>Alexa Smart Speaker</h2>
              <span className="like">O</span>
            </div>
            <h>$110.00</h>
            <span className="quantity">Quantity</span>
            <div className="addCart">
              <div className="count">
                <span className="sign">-</span>
                <span>2</span>
                <span className="sign">+</span>
              </div>
              <button>Add To Cart</button>
            </div>
            <button>Buy Now</button>
            <div className="shipping">
              <p>
                <b>Estimated Delivery:</b> Within 5-7 days
              </p>
              <p>
                <b>Free shipping:</b> On orders over $1499 and above
              </p>
            </div>
            <hr />
            <div className="product-category">
              <p>
                <b>SKU:</b> ALS53007
              </p>
              <p>
                <b>Categories:</b> Audio, New Collection
              </p>
            </div>
            <div className="payment">
              <p>Online payment option</p>
            </div>
          </div>
        </div>
        <div className="product-preview">
          <div className="border">
            <div className="image-options">
              <img src="../../assets/google-speaker.png" alt="" />
            </div>
          </div>
          <div className="border">
            <div className="image-options">
              <img src="../../assets/google-speaker.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">bottom</div>
    </div>
  );
};

export default Product;

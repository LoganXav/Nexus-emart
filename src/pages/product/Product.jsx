import { Link } from "react-router-dom";
import "./Product.scss";
const Product = () => {
  return (
    <div className="product">
      <span className="breadcrumbs"><Link className="link" to="/">Home</Link> / Audio / Alexa Smart Speaker</span>
      <div className="top">
        <div className="product-display">
          <div className="left">
            <img src="../../assets/google-speaker.png" alt="" />
          </div>
          <div className="right">
            <div className="product-name">
              <h2>Alexa Smart Speaker</h2>
              <span className="like"><i className="ri-heart-line"></i></span>
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
      <div className="bottom">
        <div className="product-details">
          <div className="details-header">
            <div className="details-options">
              <p>Description</p>
              <p>Additional Information</p>
              <p>Reviews(2)</p>
            </div>
            <hr />
          </div>
          {/*  PRODUCT DESCRIPTION  */}
          <div className="about-product">
            <div className="about-image">
              <img src="../../assets/google-speaker.png" alt="" />
            </div>
            <div className="about-text">
              <h2>Product details</h2>
              <p>
                Talk digital shark heads-up door win involved turn timepoint
                bed. Room management exploratory they forward should reinvent
                field. Dunder buy-in first invested gave ipsum down email monday
                elephant. Please pushback deliverables dive best. Commitment are
                by world across ui first charts. 2 unit live whatever diarize
                when closing all know. Now anomalies shelf-ware you win-win-win
                me close plane. Don’t stop then tomorrow work. Creep
                procrastinating break support sky.
              </p>
            </div>
          </div>
          {/*  ADDITIONAL INFORMATION  */}

          <div className="additional-info">
            <hr />
            <div className="info">
              <p>
                <b>Type</b>
              </p>
              <p>Tubelar</p>
            </div>
            <hr />
            <div className="info">
              <p>
                <b>Connection Type</b>
              </p>
              <p>Wireless, Bluetooth</p>
            </div>
            <hr />
            <div className="info">
              <p>
                <b>Special Feature</b>
              </p>
              <p>With Voice Control Built-in</p>
            </div>
            <hr />
          </div>
          {/*  REVIEWS  */}

          <div className="reviews">
            <div className="review">
              <p>There are no reviews yet.</p>
              <hr />
            </div>
            <div className="add-review">
              <h4>Be The First To Review "Alexa Smart Speaker"</h4>
              <p>
                Your Email Address will not be published. Required fields are
                marked *
              </p>
              <div className="stars">
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              <span><i class="ri-star-line"></i></span>
              </div>
              <textarea
                name=""
                id=""
                placeholder="Your review *"
                cols="30"
                rows="10"
              ></textarea>
              <div className="input">
                <input type="text" placeholder="Name *" />
                <input type="text" placeholder="Email *" />
              </div>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

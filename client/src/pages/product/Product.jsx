import "./Product.scss";
import { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import Alert from "../../components/alert/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { RelatedProducts } from "../../components/relatedProducts/RelatedProducts";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [selectedDetail, setSelectedDetail] = useState("description");
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // CHECKOUT PAYMENT
  const { currentUser } = useSelector((state) => state.user);

  const stripePromise = loadStripe(
    "pk_test_51N4ZeAJ7w1xo6cigIFo0bwK5Ca41oOL71d1BL8xQc92eGixFj66k9DHYFPz3MOW4GnMhe5labVPOm7u6lLk3iYQ700yRY8GD5M"
  );

  const handlePayment = async () => {
    try {
      if (currentUser) {
        const stripe = await stripePromise;
        const res = await makeRequest.post("/orders", {
          data,
        });

        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } else {
        setAlert(true);
      }
    } catch (err) {
      console.log(err, "error");
    }
  };

  // ALERT MODAL
  const [alert, setAlert] = useState(false);

  //   console.log(data)

  //  useEffect(() => {

  //   if(data){

  //     const si = {
  //     id: data.id,
  //     title: data.attributes.title,
  //     price: data.attributes.price,
  //     img: data.attributes.img.data.attributes.url,
  //     quantity: 1
  //   }
  //   console.log(si)
  //   }
  // }, [data])

  //  ADD TO WISHLIST
  const likedItems = useSelector((state) => state.wishlist.products);
  const isProductLiked = likedItems.some((item) => item.id === data.id);

  return (
    <div ref={divRef} className="product">
      {loading ? (
        <div className="circle">
          <CircularProgress />
        </div>
      ) : (
        <>
          <span className="breadcrumbs">
            <Link className="link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="link" to="/shop">
              Shop
            </Link>{" "}
            / {data?.attributes?.title}
          </span>
          <div className="top">
            <div className="product-display">
              <div className="left">
                <img
                  src={
                    import.meta.env.VITE_APP_UPLOAD_URL +
                    data?.attributes?.[selectedImg].data.attributes.url
                  }
                  alt="product image"
                />
              </div>
              <div className="right">
                <div className="product-name">
                  <h2>{data?.attributes?.title}</h2>
                  <span className="like">
                    {isProductLiked ? (
                      <i
                        onClick={() => dispatch(removeFromWishlist(data.id))}
                        className="ri-heart-fill"
                        style={{ color: "red" }}
                      ></i>
                    ) : (
                      <i
                        onClick={() =>
                          dispatch(
                            addToWishlist({
                              id: data.id,
                              title: data.attributes.title,
                              price: data.attributes.price,
                              img: data.attributes.img.data.attributes.url,
                              date: data.attributes.createdAt,
                              inStock: data.attributes.inStock,
                              quantity,
                            })
                          )
                        }
                        className="ri-heart-line"
                      ></i>
                    )}
                  </span>
                </div>
                <div className="prices">
                  {data?.attributes?.oldPrice ? (
                    <>
                      <p className="oldPrice">$ {data?.attributes?.oldPrice}.99</p>

                      <p>${data?.attributes?.price}.99</p>
                      <hr />
                      <span className="green">
                        -{" "}
                        {(
                          ((data?.attributes?.oldPrice -
                            data?.attributes?.price) /
                            data?.attributes?.oldPrice) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    </>
                  ) : <p>$ {data?.attributes?.price}.99</p>}
                </div>
                <div className="hurry">
                 {data?.attributes?.inStock ? <i
                    className="ri-check-line"
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      borderRadius: "50%",
                      padding: ".1rem",
                    }}
                  ></i> : <i
                  className="ri-close-line"
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: ".2rem",
                  }}
                ></i>}
                { data?.attributes?.amountLeft && <span>Hurry up!! only { data?.attributes?.amountLeft} units left</span>}
                </div>
                <span className="quantity">Quantity</span>
                <div className="addCart">
                  <div className="count">
                    <span
                      onClick={() =>
                        setQuantity(quantity > 1 ? (prev) => prev - 1 : 1)
                      }
                      className="sign"
                    >
                      -
                    </span>
                    <span>{quantity}</span>
                    <span
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="sign"
                    >
                      +
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          title: data.attributes.title,
                          price: data.attributes.price,
                          img: data.attributes.img.data.attributes.url,
                          quantity,
                        })
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
                {/* <button onClick={handlePayment}>Buy Now</button> */}
                <div className="shipping">
                  <p>
                    <b>Estimated Delivery:</b> Within 3 - 4 weeks
                  </p>
                  <p>
                    <b>Free shipping:</b> On orders over $1499 and above
                  </p>
                </div>
                <hr />
                <div className="product-category">
                  <p>
                    <b>SKU:</b> ALS5300{data.id}
                  </p>
                  <p>
                    <b>Categories:</b>{" "}
                    {data?.attributes?.categories?.data[0].attributes.title}
                  </p>
                </div>
                <div className="payment">
                  <p>Online payment option</p>
                  <div className="logos">
                    <img src="https://emart.wpthemedemos.com/electronic-gadget/wp-content/uploads/sites/13/2023/02/Online-Payment.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-preview">
              <div className="border">
                <div
                  onClick={(e) => setSelectedImg("img2")}
                  className="image-options"
                >
                  <img
                    src={
                      import.meta.env.VITE_APP_UPLOAD_URL +
                      data?.attributes?.img2.data.attributes.url
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="border">
                <div
                  onClick={(e) => setSelectedImg("img")}
                  className="image-options"
                >
                  <img
                    onClick={(e) => setSelectedImg("img")}
                    src={
                      import.meta.env.VITE_APP_UPLOAD_URL +
                      data?.attributes?.img.data.attributes.url
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="product-details">
              <div className="details-header">
                <div className="details-options">
                  <p
                    className={selectedDetail === "description" ? "active" : ""}
                    onClick={() => setSelectedDetail("description")}
                  >
                    Description
                  </p>
                  <p
                    className={
                      selectedDetail === "additional-info" ? "active" : ""
                    }
                    onClick={() => setSelectedDetail("additional-info")}
                  >
                    Additional Information
                  </p>
                  <p
                    className={selectedDetail === "reviews" ? "active" : ""}
                    onClick={() => setSelectedDetail("reviews")}
                  >
                    Reviews(2)
                  </p>
                </div>
                <hr />
              </div>
              {/*  PRODUCT DESCRIPTION  */}
              {selectedDetail === "description" ? (
                <div className="about-product">
                  <div className="about-image">
                    <img src={
                    import.meta.env.VITE_APP_UPLOAD_URL +
                    data?.attributes?.[selectedImg].data.attributes.url
                  } alt="" />
                  </div>
                  <div className="about-text">
                    <h2>Product details</h2>
                    <p>{data?.attributes?.desc}</p>
                  </div>
                </div>
              ) : /*  ADDITIONAL INFORMATION  */
              selectedDetail === "additional-info" ? (
                <div className="additional-info">
                  <hr />
                  <div className="info">
                    <p>
                      <b>Color</b>
                    </p>
                    <p>{data?.attributes?.color}</p>
                  </div>
                  <hr />
                  <div className="info">
                    <p>
                      <b>Connection Type</b>
                    </p>
                    <p>{data?.attributes?.connection}</p>
                  </div>
                  <hr />
                  <div className="info">
                    <p>
                      <b>Special Feature</b>
                    </p>
                    <p>{data?.attributes?.specialFeature}</p>
                  </div>
                  <hr />
                </div>
              ) : /*  REVIEWS  */
              selectedDetail === "reviews" ? (
                <div className="reviews">
                  <div className="review">
                    <p>There are no reviews yet.</p>
                    <hr />
                  </div>
                  <div className="add-review">
                    <h4>Be The First To Review "{data?.attributes?.title}"</h4>
                    <p>
                      Your Email Address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="stars">
                      <span>
                        <i className="ri-star-line"></i>
                      </span>
                      <span>
                        <i className="ri-star-line"></i>
                      </span>
                      <span>
                        <i className="ri-star-line"></i>
                      </span>
                      <span>
                        <i className="ri-star-line"></i>
                      </span>
                      <span>
                        <i className="ri-star-line"></i>
                      </span>
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
              ) : null}
            </div>
          </div>
          <RelatedProducts
            category={data?.attributes?.categories?.data[0].attributes.title}
          />
        </>
      )}
      {alert && <Alert setAlert={setAlert} />}
    </div>
  );
};

export default Product;

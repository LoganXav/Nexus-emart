import "./Card.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistReducer";

const Card = ({ item, i }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.wishlist.products);

  const productId = item[i].id;

  const isProductLiked = likedItems.some((item) => item.id === productId);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="card">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="image"
        >
          <Link to={`/product/${productId}`} className="link">
            <img
              src={
                import.meta.env.VITE_APP_UPLOAD_URL +
                item[i]?.attributes?.img?.data?.attributes?.url
              }
            />
          </Link>
          {item[i]?.attributes.oldPrice && (
            <span>
              -{" "}
              {(
                ((item[i]?.attributes?.oldPrice - item[i]?.attributes?.price) /
                  item[i]?.attributes?.oldPrice) *
                100
              ).toFixed(0)}
              %
            </span>
          )}
          {hover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
              }}
              className="options"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: [0.6, 0.01, 0.05, 0.9],
                  duration: 0.2,
                }}
                className="like"
              >
                {isProductLiked ? (
                  <i
                    onClick={() => dispatch(removeFromWishlist(item[i].id))}
                    className="ri-heart-fill"
                    style={{ color: "red" }}
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      dispatch(
                        addToWishlist({
                          id: productId,
                          title: item[i].attributes.title,
                          price: item[i].attributes.price,
                          img: item[i].attributes.img.data.attributes.url,
                          date: item[i].attributes.createdAt,
                          inStock: item[i].attributes.inStock,
                          quantity: 1,
                        })
                      )
                    }
                    className="ri-heart-line"
                  ></i>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: [0.6, 0.01, 0.05, 0.9],
                  duration: 0.2,
                }}
                className="bag"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item[i].id,
                      title: item[i].attributes.title,
                      price: item[i].attributes.price,
                      img: item[i].attributes.img.data.attributes.url,
                      quantity: 1,
                    })
                  )
                }
              >
                <i className="ri-shopping-cart-line"></i>
                <p>Add to cart</p>
              </motion.div>
            </motion.div>
          )}
        </div>
        <h3>{item[i]?.attributes?.title}</h3>
        <div className="price">
          {item[i]?.attributes?.oldPrice && (
            <p className="old">
              ${" "}
              {item[i]?.attributes?.oldPrice ||
                item[i]?.attributes?.price + 20}.99
            </p>
          )}
          <p className="p">$ {item[i]?.attributes?.price}.99</p>
        </div>
      </div>
    </>
  );
};

export default Card;

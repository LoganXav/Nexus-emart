// STYLES IMPORT
import "./CartMenu.scss";

// HOOKS IMPORTS
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// REDUCER ACTIONS IMPORTS
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../redux/cartReducer";


const CartMenu = ({ cartRef, cartContainerRef, cartItems }) => {
  // INVOKES USEDISPATCH HOOK FOR REDUCER ACTIONS
  const dispatch = useDispatch();
  
  // INVOKES USENAVIGATE HOOK FOR NAVIGATION
  const navigate = useNavigate();

  // CALCULATES THE TOTAL CART ITEMS PRICE
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // HANDLES OPENING AND CLOSING THE CART
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        cartContainerRef.current.classList.remove("active");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  // HANDLES ROUTING TO THE CART
  const handleGoToCart = () => {
    cartContainerRef.current.classList.remove("active");
    navigate("/cart");
  };

  return (
    <>
      <div ref={cartContainerRef} className="cart-container">
        <div ref={cartRef} className="cart-menu">
          <div className="top">
            <div className="header">
              <p>Your Basket ({cartItems.length})</p>
              <p
                onClick={() =>
                  cartContainerRef.current.classList.remove("active")
                }
                style={{ cursor: "pointer" }}
              >
                <i className="ri-close-line"></i>
              </p>
            </div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <Link className="link"  to={`/product/${item.id}`}>
                  <div className="items">
                    <div className="left">
                      <div style={{ cursor: "pointer" }} className="img-bg">
                        <img
                          src={import.meta.env.VITE_APP_UPLOAD_URL + item.img}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="right">
                      <div className="top">
                        <p>
                          <b>{item.title}</b>
                        </p>
                        <p>
                          <i
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="ri-close-line"
                          ></i>
                        </p>
                      </div>
                      <div className="bottom">
                        <div className="count">
                          <span
                            onClick={() =>
                              dispatch(
                                decreaseQuantity({ id: item.id, quantity: 1 })
                              )
                            }
                            className="sign"
                          >
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            onClick={() =>
                              dispatch(
                                increaseQuantity({ id: item.id, quantity: 1 })
                              )
                            }
                            className="sign"
                          >
                            +
                          </span>
                        </div>
                        <p>N {item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <hr className="hr" />
              </div>
            ))}
          </div>
          <div className="bottom-pay">
            <p>{}</p>
            <hr />
            <div className="total">
              <p>
                Subtotal:
              </p>
              <p>
                N {cartTotal}
              </p>
            </div>
            <button className="toCart" onClick={handleGoToCart}>
              View Cart
            </button>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;

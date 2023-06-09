// STYLES IMPORT
import "./CartMenu.scss";
import CircularProgress from '@mui/material/CircularProgress';

// HOOKS IMPORTS
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// REDUCER ACTIONS IMPORTS
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart
} from "../../../redux/cartReducer";

// PAYMENT IMPORTS
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../../makeRequest";

// MODAL IMPORT
import Alert from "../../alert/Alert";

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

  // PROCEEDS TO CHECKOUT
  const [loading, setLoading] = useState(false)
  const { currentUser } = useSelector((state) => state.user);
  const stripePromise = loadStripe(
    "pk_test_51N4ZeAJ7w1xo6cigIFo0bwK5Ca41oOL71d1BL8xQc92eGixFj66k9DHYFPz3MOW4GnMhe5labVPOm7u6lLk3iYQ700yRY8GD5M"
  );

  const handlePayment = async () => {
    try {
      if (currentUser) {
        setLoading(true)
        const stripe = await stripePromise;
        const res = await makeRequest.post("/orders", {
          cartItems,
        });
        
        dispatch(resetCart())
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
        setLoading(false)
      } else {
        setAlert(true);
        setError("You need to sign in as a registered user before making a purchase!")
      }
    } catch (err) {
      setLoading(false)
      setAlert(true)
      setError("Check your internet connectivity")
    }
  };
  // ALERT MODAL
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("")
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
                <div className="items">
                  <div className="left">
                    <Link className="link" to={`/product/${item.id}`}>
                      <div style={{ cursor: "pointer" }} className="img-bg">
                        <img
                          src={import.meta.env.VITE_APP_UPLOAD_URL + item.img}
                          alt=""
                        />
                      </div>
                    </Link>
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
                      <p>$ {item.price * item.quantity}.99</p>
                    </div>
                  </div>
                </div>
                <hr className="hr" />
              </div>
            ))}
          </div>
          <div className="bottom-pay">
            <p>{}</p>
            <hr />
            {cartTotal ? <div className="total">
              <p>Subtotal:</p>
              <p>$ {cartTotal}.99</p>
            </div> : ""}
            <button className="toCart" onClick={handleGoToCart} disabled={loading}>
              View Cart
            </button>
            <button onClick={handlePayment} className="checkout">
              {loading ? <CircularProgress size={25} thickness={1}/> : "Checkout"}
            </button>
          </div>
        </div>
      </div>
      {alert && <Alert setAlert={setAlert} message={error}/>}
    </>
  );
};

export default CartMenu;

import "./Cart.scss";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
} from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import Alert from "../../components/alert/Alert"
import CircularProgress from '@mui/material/CircularProgress';

const Cart = () => {
  const dispatch = useDispatch();

  // CHECKOUT PAYMENT
  const [loading, setLoading] = useState(false)
  const cartItems = useSelector((state) => state.cart.products);
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
        
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
        setLoading(false)
        dispatch(resetCart())
      } else {
        setAlert(true)
        setError("You need to sign in as a registered user before making a purchase!")
      }
    } catch (err) {
      setAlert(true)
      setError("Check your internet connectivity")
    }
  };



  // CART TOTAL PRICE
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ALERT MODAL
  const [alert, setAlert] = useState(false)
  const [error, setError] = useState("")

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="container">
          <Link to="/shop">
            <button>Return To Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart-card">
          <div className="left">
            <table>
              <thead>
                <tr className="table-row">
                  <th></th>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              {cartItems.map((item, i) => (
                <tbody key={item.id}>
                  <tr className="table-row">
                    <td>
                      <div className="image-row">
                        <span onClick={() => dispatch(removeFromCart(item.id))}>
                          <i className="ri-close-line"></i>
                        </span>
                        <Link className="link" to={`/product/${item.id}`}>
                          <div className="image">
                            <img
                              src={
                                import.meta.env.VITE_APP_UPLOAD_URL + item.img
                              }
                              alt=""
                            />
                          </div>
                        </Link>
                      </div>
                    </td>
                    <td>{item.title}</td>
                    <td>$ {item.price}.99</td>
                    <td>
                      <div className="quantity">
                        <p
                          onClick={() =>
                            dispatch(
                              decreaseQuantity({ id: item.id, quantity: 1 })
                            )
                          }
                          className="sign"
                        >
                          -
                        </p>
                        <p className="count">{item.quantity}</p>
                        <p
                          onClick={() =>
                            dispatch(
                              increaseQuantity({ id: item.id, quantity: 1 })
                            )
                          }
                          className="sign"
                        >
                          +
                        </p>
                      </div>
                    </td>
                    <td>$ {item.quantity * item.price}.99</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="coupon">
              <input type="text" placeholder="Enter coupon code..." />
              <button>Apply coupon</button>
            </div>
          </div>
          <div className="right">
            <h3>Cart Totals</h3>
            <hr />
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${cartTotal}.99</p>
            </div>
            <hr />
            <div className="shipping">
              <div className="top">
                <p>Shipping</p>
                <div className="subtotal">
                  <p>Flat rate:</p>
                  <p>$ 1.99</p>
                </div>
                <p>
                  Shipping to <b>NGA.</b>
                </p>
              </div>
              <p>Change Address</p>
            </div>
            <hr />
            <div className="subtotal">
              <p>Total</p>
              <p>$ {cartTotal - 2}.99</p>
            </div>
            <button onClick={handlePayment} className="checkout">
              {loading ? <CircularProgress size={25} thickness={2}/> : "Proceed to checkout"}
            </button>
          </div>
        </div>
      )}
      {alert && <Alert setAlert = {setAlert} message={error} />}
    </div>
  );
};

export default Cart;

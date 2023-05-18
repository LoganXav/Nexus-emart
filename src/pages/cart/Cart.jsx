import "./Cart.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/cartReducer" 
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest"


const Cart = () => {

  const cartItems = useSelector(state => state.cart.products)
  const dispatch = useDispatch()
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const stripePromise = loadStripe('pk_test_51N4ZeAJ7w1xo6cigIFo0bwK5Ca41oOL71d1BL8xQc92eGixFj66k9DHYFPz3MOW4GnMhe5labVPOm7u6lLk3iYQ700yRY8GD5M')
    
  const handlePayment = async () => {
      try{
        const stripe = await stripePromise
        const res = await makeRequest.post("/orders", {
          cartItems,
        })

        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        })
      } catch (err) {
        console.log(err, "error")
      }
    }
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
                        <span onClick={() => dispatch(removeFromCart(item.id))}><i className="ri-close-line"></i></span>
                        <Link className="link" to={`/product/${item.id}`}>
                        <div className="image">
                          <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt="" />
                        </div>
                        </Link>
                      </div>
                    </td>
                        <td>{item.title}</td>
                    <td>N {item.price}</td>
                    <td>
                      <div className="quantity">
                        <p onClick={() => dispatch(decreaseQuantity({id: item.id, quantity: 1}))} className="sign">-</p>
                        <p className="count">{item.quantity}</p>
                        <p onClick={() => dispatch(increaseQuantity({id: item.id, quantity: 1}))} className="sign">+</p>
                      </div>
                    </td>
                    <td>N {item.quantity * item.price}</td>
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
              <p>{cartTotal}</p>
            </div>
            <hr />
            <div className="shipping">
              <div className="top">
                <p>Shipping</p>
                <div className="subtotal">
                  <p>Flat rate:</p>
                  <p>N 258</p>
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
              <p>N {cartTotal - 258}</p>
            </div>
            <button onClick={handlePayment}>Proceed To Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

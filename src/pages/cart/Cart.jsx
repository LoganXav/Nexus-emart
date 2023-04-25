import { useState } from "react";
import { Link } from "react-router-dom"
import "./Cart.scss";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Drone",
      img: "../../assets/spy-drone.png",
      price: 110,
      date: "April 24, 2023",
      stockStatus: true,
    },
    {
      id: 2,
      name: "Drone",
      img: "../../assets/spy-drone.png",
      price: 110,
      date: "April 24, 2023",
      stockStatus: true,
    },
    {
      id: 3,
      name: "Drone",
      img: "../../assets/spy-drone.png",
      price: 110,
      date: "April 24, 2023",
      stockStatus: false,
    },
  ]);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

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
                        <span onClick={() => removeItem(item.id)}>x</span>
                        <div className="image">
                          <img src={item.img} alt="" />
                        </div>
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="quantity">
                        <p className="sign">-</p>
                        <p className="count">2</p>
                        <p className="sign">+</p>
                      </div>
                    </td>
                    <td>$400</td>
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
              <p>$180</p>
            </div>
            <hr />
            <div className="shipping">
              <div className="top">
                <p>Shipping</p>
                <div className="subtotal">
                  <p>Flat rate:</p>
                  <p>$10.00</p>
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
              <p>$190.00</p>
            </div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

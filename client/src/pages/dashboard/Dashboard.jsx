import "./Dashboard.scss";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userReducer";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [option, setOption] = useState("dashboard");

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={divRef} className="cart">
      <div className="dashboard-container">
        <div className="left">
          <div className="options">
            <p onClick={() => setOption("dashboard")}>Dashboard</p>
            <p onClick={() => setOption("orders")}>Orders</p>
            <p onClick={() => setOption("dashboard")}>Addresses</p>
            <p onClick={() => setOption("dashboard")}>Account details</p>
            <Link to="/wishlist" className="link">
              <p>Wishlist</p>
            </Link>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        </div>
        <div className="right">
          {option === "dashboard" && (
            <div className="dashboard-text">
              <p>
                Hello {currentUser.user.username} (not{" "}
                {currentUser.user.username}?{" "}
                <span
                  onClick={() => dispatch(logout())}
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ fontWeight: "bold", color: "black" }}>Log out</span>
                </span>
                )
              </p>
              <p>
                From your account dashboard you can view your recent orders,
                manage your shipping and billing addresses, and edit your
                password and account details.
              </p>
            </div>
          )}
          {option === "orders" && (
            <div className="orders-text">
              <div className="orders">
                <p>No order has been made yet.</p>
                <button>Browse Products</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

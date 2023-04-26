import "./Navbar.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  const [active, setActive] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  // NAVBAR SCROLL EFFECT
  const isActive = () => {
    scrollY > 800 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const { pathname } = useLocation();

  // USER SIGN IN MODAL
  const modalRef = useRef();
  const signinRef = useRef(null);
  const registerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setUserOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  function handleSigninClick() {
    setUserRegister(false);
    signinRef.current.classList.remove("inactive");
    registerRef.current.classList.remove("active");
  }

  function handleRegisterClick() {
    setUserRegister(true);
    registerRef.current.classList.add("active");
    signinRef.current.classList.add("inactive");
  }

  // PASSWORD VISIBILITY
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // SEARCH MENU MODAL
  useEffect(() => {
    const search = document.querySelector(".search");
    if (searchOpen == true) {
      search.classList.add("active");
    } else {
      search.classList.remove("active");
    }
  }, [searchOpen]);

  // CART MENU
  const cartRef = useRef(null);
  const cartContainerRef = useRef(null);
  const handleOpenCart = () => {
    cartRef.current.classList.add("active");
    cartContainerRef.current.classList.add("active");
  };

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

  const navigate = useNavigate();
  const handleGoToCart = () => {
    cartContainerRef.current.classList.remove("active");
    navigate("/cart");
  };

  return (
    <>
      <div className="navbar">

        {/* *********  NAVBAR TOP  ******** */}
        <div className="top">
          <div className="left">
            Free delivery on orders over $1499. Don’t miss discount.
          </div>
          <div className="right">
            <span>
              <i class="ri-question-line"></i>
              Help & Contact
            </span>

            <span>
              <i class="ri-price-tag-3-line"></i>
              Deals of the day
            </span>

            <span className="last">
              <i class="ri-map-pin-line"></i>
              Store location
            </span>
          </div>
        </div>

         {/* *********  NAVBAR BOTTOM  ******** */}

        <div className={active ? "bottom active" : "bottom "}>
        <div className="menu">
          <i class="ri-menu-line"></i>
          </div>
          <Link className="link" to="/">
            <div className="left">
              <i class="ri-shopping-bag-line"></i>
              <h2>Nexus</h2>
            </div>
          </Link>
          <div className="right">
            <div onClick={() => setSearchOpen(true)} className="nav-search">
              <i class="ri-search-line"></i>
            </div>
            <div onClick={() => setUserOpen(true)}>
              <i class="ri-user-3-line"></i>
            </div>
            <Link className="link" to="/wishlist">
              <div className="parent nav-wish">
                <i class="ri-heart-line"></i>
                <span>5</span>
              </div>
            </Link>
            <div onClick={handleOpenCart} className="parent">
              <i class="ri-shopping-cart-line"></i>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>

      {/* *********  SEARCH MODAL  ******** */}

      <div className="search">
        <input placeholder="Type Your Search" type="text" />
        <button onClick={() => setSearchOpen(false)}><i class="ri-close-line"></i></button>
      </div>

      {/* *********  USER SIGNIN MODAL  ******** */}

      {userOpen && (
        <div className="user-container">
          <div ref={modalRef} className="user">
            <div className="top">
              <button
                onClick={handleSigninClick}
                ref={signinRef}
                className="signin"
              >
                Sign in
              </button>
              <button
                onClick={handleRegisterClick}
                ref={registerRef}
                className="register"
              >
                Register
              </button>
            </div>
            {!userRegister ? (
              <div className="bottom">
                <label htmlFor="Username Or Email">Username Or Email</label>
                <input placeholder="Username" type="text" />
                <label htmlFor="Password">Password</label>
                <div className="password">
                <input id="input" placeholder="Password" type={showPassword ? "text" : "password"} />
                { showPassword ? <i onClick={toggleShowPassword} class="ri-eye-off-line"></i> : <i onClick={toggleShowPassword} class="ri-eye-line"></i>}
                </div>
                <div className="forgot">
                  <div className="left">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </div>
                  <span>
                    <a>Lost your password?</a>
                  </span>
                </div>
                <button>Login</button>
              </div>
            ) : (
              <div className="bottom">
                <label htmlFor="Username Or Email">Username *</label>
                <input placeholder="Username" type="text" />
                <label htmlFor="Email">Email Address *</label>
                <input placeholder="Email Address" type="email" />
                <label htmlFor="Password">Password *</label>
                <div className="password">
                <input id="input" placeholder="Password" type={showPassword ? "text" : "password"} />
                { showPassword ? <i onClick={toggleShowPassword} class="ri-eye-off-line"></i> : <i onClick={toggleShowPassword} class="ri-eye-line"></i>}
                </div>
                <div className="forgot">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website.
                  </p>
                </div>
                <button>Register</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart Side Menu */}

      <div ref={cartContainerRef} className="cart-container">
        <div ref={cartRef} className="cart-menu">
          <div className="top">
            <div className="header">
              <p>Your Basket</p>
              <p
                onClick={() =>
                  cartContainerRef.current.classList.remove("active")
                }
                style={{ cursor: "pointer" }}
              >
                x
              </p>
            </div>
            <div className="items">
              <div className="left">
                <div className="img-bg">
                  <img src="../../assets/headset.png" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="top">
                  <p>Drone</p>
                  <p>x</p>
                </div>
                <div className="bottom">
                  <div className="count">
                    <span className="sign">-</span>
                    <span>1</span>
                    <span className="sign">+</span>
                  </div>
                  <p>$180.00</p>
                </div>
              </div>
            </div>
            <hr className="hr" />
            <div className="items">
              <div className="left">
                <div className="img-bg">
                  <img src="../../assets/headset.png" alt="" />
                </div>
              </div>
              <div className="right">
                <div className="top">
                  <p>Drone</p>
                  <p>x</p>
                </div>
                <div className="bottom">
                  <div className="count">
                    <span className="sign">-</span>
                    <span>1</span>
                    <span className="sign">+</span>
                  </div>
                  <p>$180.00</p>
                </div>
              </div>
            </div>
            <hr className="hr" />
          </div>
          <div className="bottom-pay">
            <p>$360.00</p>
            <hr />
            <div className="total">
              <p>
                <b>Subtotal:</b>
              </p>
              <p>
                <b>$360.00</b>
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

export default Navbar;

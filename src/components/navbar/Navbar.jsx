// STYLES IMPORT
import "./Navbar.scss";

// HOOKS IMPORTS
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// NAVIGATION MENU IMPORT
import NavigationMenu from "./navigationMenu/NavigationMenu";

// SEARCH MODAL IMPORT
import SearchModal from "./searchModal/SearchModal";

// SIGN IN MODAL IMPORT
import UserSignInModal from "./userSignInModal/UserSignInModal";

// CART MENU IMPORT
import CartMenu from "./cartMenu/CartMenu";

const Navbar = () => {
  // REDUX STATES
  const wishlistItems = useSelector((state) => state.wishlist.products);
  const { currentUser } = useSelector((state) => state.user);


  
  // INVOKES USENAVIGATE FOR NAVIGATION
  const navigate = useNavigate();
  
  // INVOKES USEL0CATION FOR THE NAVBAR
  const {pathname} = useLocation()

  // NAVBAR SCROLL EFFECT
  const [active, setActive] = useState(false);
  const isActive = () => {
    scrollY > 800 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  //************************* USER SIGN IN MODAL *******************************//
  const [userOpen, setUserOpen] = useState(false);

  // HANDLES ROUTING TO USER DASHBOARD
  const handleUserClick = () => {
    if (currentUser !== null) {
      navigate("/dashboard");
    } else {
      setUserOpen(true);
    }
  };

  //************************* SEARCH MENU MODAL *******************************//

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // HANDLES ROUTING TO SEARCH PAGE
  const handleSearch = () => {
    navigate("/search", { state: searchTerm, setState: setSearchTerm, replace: true });
    setSearchTerm("");
    setSearchOpen(false);
  };

   //************************* CART MENU *******************************//
  const cartItems = useSelector((state) => state.cart.products);
  const cartRef = useRef(null);
  const cartContainerRef = useRef(null);

  const handleOpenCart = () => {
    cartRef.current.classList.add("active");
    cartContainerRef.current.classList.add("active");
  };

   //************************* NAVIGATION MENU *******************************//
  const [navOpen, setNavOpen] = useState(false);


  return (
    <>
      <div className="navbar">
        {/* *********  NAVBAR TOP  ******** */}
        <div className="top-container">
          <div className="top">
            <div className="left">
              Free delivery on orders over $1499. Don’t miss discount.
            </div>
            <div className="right">
              <span>
                <i className="ri-question-line"></i>
                Help & Contact
              </span>

              <span>
                <i className="ri-price-tag-3-line"></i>
                Deals of the day
              </span>

              <span className="last">
                <i className="ri-map-pin-line"></i>
                Store location
              </span>
            </div>
          </div>
        </div>

        {/* *********  NAVBAR BOTTOM  ******** */}
        <div className={(active || pathname !== "/") ? "bottom active" : "bottom "}>
          <div className="bottom-container">
            <div className="menu">
              <i
                style={{ cursor: "pointer" }}
                onClick={() => setNavOpen(!navOpen)}
                className="ri-menu-line"
              ></i>
            </div>
            <Link className="link" to="/">
              <div className="left">
                <i className="ri-shopping-bag-line"></i>
                <h2>Nexus</h2>
              </div>
            </Link>
            <div className="right">
              <div onClick={() => setSearchOpen(true)} className="nav-search">
                <i className="ri-search-line"></i>
              </div>
              <div onClick={handleUserClick}>
                <i className="ri-user-3-line"></i>
              </div>
              <Link className="link" to="/wishlist">
                <div className="parent nav-wish">
                  <i className="ri-heart-line"></i>
                  <span>{wishlistItems.length}</span>
                </div>
              </Link>
              <div onClick={handleOpenCart} className="parent">
                <i className="ri-shopping-cart-line"></i>
                <span>{cartItems.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* *********  SEARCH MODAL  ******** */}

      <SearchModal
        searchOpen={searchOpen}
        searchTerm={searchTerm}
        setSearchOpen={setSearchOpen}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {/* *********  USER SIGNIN MODAL  ******** */}

      <UserSignInModal 
        userOpen={userOpen} 
        setUserOpen={setUserOpen} 
      />

      {/* *********  CART MENU  ******** */}

      <CartMenu 
        cartRef={cartRef} 
        cartContainerRef={cartContainerRef} 
        cartItems={cartItems} 
      />

       {/* *********  NAVIGATION MENU  ******** */}

      <NavigationMenu 
        navOpen={navOpen} 
        setNavOpen={setNavOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        wishlistItems={wishlistItems}
      />
    </>
  );
};

export default Navbar;

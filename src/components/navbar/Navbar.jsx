import "./Navbar.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  const [active, setActive] = useState(false)

    const isActive = () => {
       scrollY > 800 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)            
        }      
    },[])

  const modalRef = useRef();

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

  useEffect(() => {
    const search = document.querySelector(".search");
    if (searchOpen == true) {
      search.classList.add("active");
    } else {
      search.classList.remove("active");
    }
  }, [searchOpen]);

  const signinRef = useRef(null);
  const registerRef = useRef(null);

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

  return (
    <>
      <div className="navbar">
        <div className="top">
          <div className="left">
            Free delivery on orders over $1499. Don’t miss discount.
          </div>
          <div className="right">
            <span>
              <HelpOutlineOutlinedIcon />
              Help & Contact
            </span>
            |
            <span>
              <LocalOfferOutlinedIcon />
              Deals of the day
            </span>
            |
            <span>
              <LocationOnOutlinedIcon />
              Store location
            </span>
          </div>
        </div>
        <div className={active ? "bottom active" : "bottom "}>
          <Link className="link" to="/">
            <div className="left">Nexus</div>
          </Link>
          <div className="right">
            <div onClick={() => setSearchOpen(true)}>
              <SearchIcon />
            </div>
            <div onClick={() => setUserOpen(true)}>
              <PersonOutlineIcon />
            </div>
            <Link className="link" to="/wishlist">
              <div className="parent">
                <FavoriteBorderIcon />
                <span>5</span>
              </div>
            </Link>
            <div className="parent">
              <LocalMallOutlinedIcon />
              <span>5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="search">
        <input placeholder="Type Your Search" type="text" />
        <button onClick={() => setSearchOpen(false)}>X</button>
      </div>

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
                <input placeholder="Password" type="Password" />
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
                <label htmlFor="Username Or Email">Username</label>
                <input placeholder="Username" type="text" />
                <label htmlFor="Email">Email Address</label>
                <input placeholder="Email Address" type="email" />
                <label htmlFor="Password">Password</label>
                <input placeholder="Password" type="Password" />
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
    </>
  );
};

export default Navbar;

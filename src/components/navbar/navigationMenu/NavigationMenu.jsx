// STYLES IMPORT
import "./NavigationMenu.scss";

// HOOKS IMPORTS
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavigationMenu = ({ navOpen, setNavOpen, searchTerm, setSearchTerm, handleSearch, wishlistItems }) => {
  const navRef = useRef(null);

  // HANDLES OPENING AND CLOSING THE NAVIGATION MENU
  useEffect(() => {
    const handleCloseNav = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleCloseNav);

    return () => {
      document.removeEventListener("mousedown", handleCloseNav);
    };
  }, [navRef]);
  return (
    <>
      {navOpen && (
        <div className="nav-container">
          <div ref={navRef} className="nav-menu">
            <div className="header">
                <div className="left">
                <i className="ri-shopping-bag-line"></i>
                <h2>Nexus</h2>
              </div>
              <i
                style={{ cursor: "pointer" }}
                onClick={() => setNavOpen(!navOpen)}
                className="ri-close-line"
              ></i>
            </div>
            <hr />
            <div className="input">
              <input
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type Your Search"
                type="text"
              />
              <i
                onClick={handleSearch}
                style={{ cursor: "pointer" }}
                className="ri-search-line"
              ></i>
            </div>
            <Link className="link" to="/wishlist">
              <div
                onClick={() => setNavOpen(!navOpen)}
                className="nav-wishlist"
              >
                <p>Wishlist</p>
                <div className="nav-heart">
                  <i className="ri-heart-line"></i>
                  <span className="nav-heart-count">
                    {wishlistItems.length}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMenu;

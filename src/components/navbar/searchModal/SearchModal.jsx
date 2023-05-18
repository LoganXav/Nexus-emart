// STYLES IMPORT
import "./SearchModal.scss";

// HOOK IMPORT
import { useEffect } from "react";

const SearchModal = ({ searchOpen, searchTerm, setSearchOpen, setSearchTerm, handleSearch }) => {


  // OPEN AND CLOSE SEARCH MODAL
  useEffect(() => {
    const search = document.querySelector(".search");
    if (searchOpen == true) {
      search.classList.add("active");
    } else {
      search.classList.remove("active");
    }
  }, [searchOpen]);


  return (
    <div className="search">
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
          className="ri-arrow-right-line"
        ></i>
      </div>
      <button onClick={() => setSearchOpen(false)}>
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
};

export default SearchModal;

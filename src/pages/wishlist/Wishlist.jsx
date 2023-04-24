import "./Wishlist.scss";
const Wishlist = () => {
  const likedItems = [];

  return (
    <div className="wishlist">
      {likedItems.length === 0 ? (
        <>
          <div className="container">
            <div className="box">
              <p>Your Wishlist is currently empty.</p>
            </div>
            <button>Return To Shop</button>
          </div>
        </>
      ) : (
        <div className="container">
          <h1>Hiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

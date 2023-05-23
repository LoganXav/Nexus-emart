import "./Wishlist.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { removeFromWishlist } from "../../redux/wishlistReducer";
import { addToCart } from "../../redux/cartReducer";


const Wishlist = () => {

  const dispatch = useDispatch()

  const likedItems = useSelector((state) => state.wishlist.products)

  return (
    <div className="wishlist">
      {likedItems.length === 0 ? (
        <>
          <div className="container">
            <div className="box">
              <p>Your Wishlist is currently empty.</p>
            </div>
            <Link className="link" to="/shop">
              <button>Return To Shop</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="table">
          <table>
            <thead>
              <tr className="table-row top">
                <th className="others"></th>
                <th className="others">Product</th>
                <th className="others" >Unit Price</th>
                <th className="others" >Date Added</th>
                <th className="others" >Stock Status</th>
                <th className="others"></th>
              </tr>
            </thead>
            {likedItems.map((item, i) => (
              <tbody key={item.id}>
                <tr className="table-row">
                  <td className="first-row">
                    <div className="image-row">
                      <span onClick={() => dispatch(removeFromWishlist(item.id))}><i className="ri-close-line"></i></span>
                      <Link to={`/product/${item.id}`} className="image">
                        <img src={
                                import.meta.env.VITE_APP_UPLOAD_URL + item.img
                              } alt="" />
                      </Link>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>N {item.price}</td>
                  <td>{item.date}</td>
                  <td>{item.inStock ? <p>In Stock {<i className="ri-check-line"></i>} </p> : "Out of Stock"}</td>
                  <td>
                    <button  onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          img: item.img,
                          quantity: 1
                        })
                      )
                    }>Add To Cart</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

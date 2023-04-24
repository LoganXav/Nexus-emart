import { useState } from "react";
import "./Wishlist.scss";
const Wishlist = () => {
  

  const [likedItems, setLikedItems] = useState([
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
    const updatedItems = likedItems.filter((item) => item.id !== id);
    setLikedItems(updatedItems);
  };

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
        <div className="table">
          <table>
            <thead>
              <tr className="table-row">
                <th></th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Date Added</th>
                <th>Stock Status</th>
                <th></th>
              </tr>
            </thead>
            {likedItems.map((item, i) => (
              <tbody key={item.id}>
                <tr className="table-row">
                  <td className="first-row">
                    <div className="image-row">
                      <span onClick={() => removeItem(item.id)}>x</span>
                      <div className="image">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.date}</td>
                  <td>{item.stockStatus ? "In Stock" : "Out of Stock"}</td>
                  <td>
                    <button>Add To Cart</button>
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

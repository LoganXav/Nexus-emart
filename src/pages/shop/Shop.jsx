import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Shop.scss";
const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Drone",
      img: "../../assets/spy-drone.png",
      // oldPrice: '150',
      newPrice: "180",
    },
    {
      id: 2,
      name: "Alexa Smart Speaker",
      img: "../../assets/homepod.png",
      oldPrice: "150",
      newPrice: "110",
    },
    {
      id: 3,
      name: "Major III headphone",
      img: "../../assets/headset.png",
      // oldPrice: '150',
      newPrice: "70",
    },
    {
      id: 4,
      name: "Smart Watch",
      img: "../../assets/smart-watch.png",
      oldPrice: "150",
      newPrice: "110",
      discount: "-27%",
    },
    {
      id: 5,
      name: "Google Smart Speaker",
      img: "../../assets/google-speaker.png",
      // oldPrice: '150',
      newPrice: "130",
    },
    {
      id: 6,
      name: "i12 Earbuds",
      img: "../../assets/airpods.png",
      // oldPrice: '150',
      newPrice: "112",
    },
    {
      id: 7,
      name: "Digital Camera",
      img: "../../assets/digital-camera.png",
      oldPrice: "130",
      newPrice: "110",
      discount: "-15%",
    },
    {
      id: 8,
      name: "Optical Camera",
      img: "../../assets/camera.png",
      oldPrice: "115",
      newPrice: "94",
      discount: "-18%",
    },
    // {
    //   id: 2,
    //   name: "Oculus ",
    //   img: "../../assets/oculus.png",
    //   oldPrice: "180",
    //   newPrice: "172",
    //   discount: "-4%",
    // },
    // {
    //     id: 10,
    //     name: 'i8 series Smartwatch',
    //     img: '../../assets/smart-watch',
    //     oldPrice: '150',
    //     newPrice: '110'
    // },
  ];

  return (
    <div className="shop">
      <div className="top">
        <div className="breadcrumbs">
          <div>
            <b>
              <Link className="link" to="/">
                Home
              </Link>{" "}
              / Shop
            </b>
          </div>
        </div>
        <div className="filters">
          <div className="left">
            <p>Showing all 10 results</p>
          </div>
          <div className="right">
            <span>Filters</span>
            <hr />
            <span>Default Sorting</span>
            <hr />
          </div>
        </div>
      </div>
      <div className="bottom">
        {products.map((product, i) => (
          <Card item={products} key={product.id} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

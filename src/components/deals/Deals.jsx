import "./Deals.scss";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const Deals = () => {
  const deals = [
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
    <div className="deals">
      <div className="top">
        <h1>Deal on gadgets</h1>
        <p>Save big on the latest gadgets and electronics. Shop today!</p>
      </div>
      <div className="bottom">
        {deals.map((deal, i) => (
          <Card key={deal.id} item={deals} i={i} />
        ))}
      </div>
      <Link className="link" to="/shop">
        <button>More Collection</button>
      </Link>
    </div>
  );
};

export default Deals;

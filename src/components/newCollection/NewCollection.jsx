import Card from "../card/Card";
import "./NewCollection.scss";
const NewCollection = () => {
  const collections = [
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
  ];

  return (
    <div className="newCollection">
        <div className="top">
            <h1>New collection</h1>
            <p>Wand crossbow phoenix levicorpus sirius. Easy raw-steak half-blood petrified veela house lupin it.</p>
        </div>
      <div className="bottom">
        {collections.map((collection, i) => (
          <Card key={collection.id} item={collections} i={i} />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;

import "./Categories.scss";
const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Google speaker",
      img: "../assets/google-speaker.png",
    },
    {
      id: 2,
      name: "Wireless headset",
      img: "../assets/wireless-headset.png",
    },
    {
      id: 3,
      name: "Smart watch",
      img: "../assets/smart-watch.png",
    },
    {
      id: 4,
      name: "Digital camera",
      img: "../assets/digital-camera.png",
    },
    {
      id: 5,
      name: "Spy drone",
      img: "../assets/spy-drone.png",
    },
  ];

  return (
    <div className="categories">
      <div className="top">
        <h1>Shop by categories</h1>
        <p>We offer a wide range of electronics products to meet all your needs. Below, you'll find our categories section, where you can easily browse and shop for your favorite products.</p>
      </div>
      <div className="bottom">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <div class="image">
              <img src={category.img} alt="" />
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

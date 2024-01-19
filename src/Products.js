import React from "react";
import Carousel from "react-elastic-carousel";
import "./Products.css";

const Products = ({ products }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1100, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {products.map((p) => (
            <div className="card">
              <img src={p.link} alt="" />
              <div className="data">
                <h5>{p.name}</h5>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Products;

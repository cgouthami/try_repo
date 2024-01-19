import React from "react";
import "./Store.css";
import Carousel from "react-elastic-carousel";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { images } from "./data";

const Store = () => {
  const image = images;
  return (
    <div className="store">
      <div className="product-text">
        <h2>Store Locator</h2>
        <p>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <Button variant="outlined">
          <span className="btn-store">Find a nearby store</span>
          <ArrowForwardIcon />
        </Button>
      </div>
      <div className="carousel-store">
        <div className="carousel-wrapper">
          <Carousel>
            {image.map((p) => (
              <div className="store-card">
                <img src={p.link} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Store;

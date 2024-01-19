import React from "react";
import "./SingleProduct.css";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const SingleProduct = ({ data, inverted }) => {
  return (
    <div className={`single ${inverted ? "inverted" : ""}`}>
      <div className={`product-text ${inverted ? "pr" : "pl"}`}>
        <h3>{data.main}</h3>
        <h2>{data.head}</h2>
        <p>{data.text}</p>
        <Button variant="outlined">
          <span className="btn-text">{data.btn_text}</span>
          <ArrowForwardIcon />
        </Button>
      </div>
      <div
        className={`product-image ${
          inverted ? "product-image-l" : "product-image-r"
        }`}
      >
        <img src={data.link} alt="" />
      </div>
    </div>
  );
};

export default SingleProduct;

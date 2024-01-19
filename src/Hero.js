import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DragHandleIcon from "@material-ui/icons/DragHandle";

const Hero = () => {
  return (
    <div className="region">
      <div className="hero">
        <div className={`nav`}>
          <div className="nav-left">
            <p>Shop</p>
            <p>Read</p>
            <p>Store</p>
            <p>Search</p>
          </div>
          <div className="nav-right">
            <p>Login</p>
            <p>Cart</p>
          </div>
        </div>
        <div className={`mob-nav`}>
          <div className="nav-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
              alt=""
            />
          </div>
          <div className="nav-right">
            <p>Cart</p>
            <DragHandleIcon />
          </div>
        </div>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
            alt=""
          />
        </div>
        <div className="hero-text">
          <h4>Mother’s Day</h4>
          <h1>Affection, bottled</h1>
          <p>
            Offering renewed thanks with every pour, dollop and lather, our
            suggested gifts for caregivers of all varieties include satisfying
            body cleansers, softening hand balms, and gentle formulations for
            the skin.
          </p>
          <Button variant="outlined">
            <span className="btn-hero">Discover gifts for mother figures</span>
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <div className="mob-hero-text">
        <h4>Mother’s Day</h4>
        <h1>Affection, bottled</h1>
        <p>
          Offering renewed thanks with every pour, dollop and lather, our
          suggested gifts for caregivers of all varieties include satisfying
          body cleansers, softening hand balms, and gentle formulations for the
          skin.
        </p>
        <Button variant="outlined">
          <span className="btn-hero">Discover gifts for mother figures</span>
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default Hero;

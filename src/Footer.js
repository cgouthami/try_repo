import React from "react";
import "./Footer.css";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Checkbox } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="mail">
          <div className="input">
            <input type="text" placeholder="Email Address" />
            <ArrowForwardIcon />
          </div>
          <div className="mail-text">
            <Checkbox className="check" color="primary" />
            <p className="long-text">
              Subscribe to receive communications from Aesop about our products
              and services. By subscribing, you confirm you have read and accept
              our <span className="line">privacy policy</span>.
            </p>
          </div>
        </div>
        <div className="footer-info">
          <h3>Orders and support</h3>
          <hr />
          <div className="item">
            <p>
              Contact us <CallMadeIcon />
            </p>
            <p>
              FAQs <CallMadeIcon />
            </p>
            <p>
              Delivery and returns <CallMadeIcon />
            </p>
            <p>Terms and conditions</p>
          </div>
        </div>
        <div className="footer-info">
          <h3>Services</h3>
          <hr />
          <div className="item">
            <p>Live assistance</p>
            <p>Corporate gifts</p>
            <p>Facial appointments</p>
          </div>
        </div>
        <div className="footer-info loc">
          <h3>Location preferences</h3>
          <hr />
          <div className="item">
            <p>
              Shipping: <span className="line">Hong Kong (S.A.R)</span>
            </p>
            <p>
              Language: <span className="line">English</span>
            </p>
          </div>
        </div>
        <div className="footer-info change">
          <h3>Sustainability</h3>
          <hr />
          <p className="long-text">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>
        <div className="footer-info">
          <h3>About</h3>
          <hr />
          <div className="item">
            <p>Our story</p>
            <p>
              Foundation <CallMadeIcon />
            </p>
            <p>Careers</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
          </div>
        </div>
        <div className="footer-info media">
          <h3>Social media</h3>
          <hr />
          <div className="item">
            <p>
              Instagram <CallMadeIcon />
            </p>
            <p>
              Twitter <CallMadeIcon />
            </p>
            <p>
              Linkedin <CallMadeIcon />
            </p>
            <p>WeChat</p>
            <p>
              Weibo <CallMadeIcon />
            </p>
          </div>
        </div>
      </div>
      <div className="end">
        <h4>&#169; Aesop</h4>
      </div>
    </div>
  );
};

export default Footer;

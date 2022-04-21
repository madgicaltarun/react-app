import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-content">
          <div className="footer-heading"><p className="font-body wieght-bold">Total due amount</p></div>
          <div className="btn"> <button className="footer-btn text_btn d-6 white">Pay $ 466</button></div>
        </div>
    </div>
  );
}
export default Footer;

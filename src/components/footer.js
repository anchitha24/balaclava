import React from "react";
import cardImage from "../images/cards.svg";
import titleImg from "../images/logo.png";
import "./css/footer.css";

const Footer = () => {

  return(
    <div className = "d-flex container justify-content-between footerPadding">
      <div className = "customFooterWidth d-flex flex-column fontSize12">
        <img src = {titleImg} className = "logoImageStyle"/>
        <p>© 2022 BALACLAVA</p>
      </div>
      <div className = "d-flex flex-column">
        <img src = {cardImage} className = "logoFooterImageStyle"/>
        <ul className = "listItems">
          <li>
            <a>. PRIVACY POLICY</a>
          </li>
          <li>
            <a>. REFUND POLICY</a>
          </li>
          <li>
            <a>. TERMS OF USE</a>
          </li>
          <li>
            <a>. ABOUT US</a>
          </li>
          <li>
            <a>. CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className = "customFooterWidth d-flex">
        <i className = "fab fa-facebook footerIconStyle p-2" aria-hidden = "true"/>
        <i className = "fab fa-twitter footerIconStyle p-2" aria-hidden = "true"/>
        <i className = "fab fa-instagram footerIconStyle p-2" aria-hidden = "true"/>
        <i className = "fab fa-linkedin footerIconStyle p-2" aria-hidden = "true" />
      </div>
    </div>
  )
}

export default Footer;
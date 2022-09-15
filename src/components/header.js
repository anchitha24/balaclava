import React from "react";
import "./css/header.css";
import titleImg from "../images/logo.png";

const Header = () => {

  return(
    <div className = "d-flex container justify-content-between">
      <div className = "customWidth"><i className = "fa fa-bars iconSize p-2" aria-hidden = "true"/></div>
      <div className = ""><img src = {titleImg} className = "logoImageStyle"/></div>
      <div className = "customWidth d-flex">
        <i className = "fa fa-search iconSize p-2" aria-hidden = "true"/>
        <i className = "fa fa-user iconSize p-2" aria-hidden = "true"/>
        <i className = "fa fa-shopping-cart iconSize p-2" aria-hidden = "true" />
      </div>
    </div>
  )
}

export default Header;
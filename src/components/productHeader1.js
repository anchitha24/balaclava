import React from "react";
import { useSelector } from "react-redux";
import "./css/productHeader1.css";
import image from "../images/shop-head.png";
import { productDetails } from "../redux/commonReducer";

const ProductHeader1 = () => {

  const data = useSelector (productDetails);
  
  return(
    <div className = "headerImageBoxStyle">
      <img src = {image} className = "headerImageStyle"/>
      <h1 className = "headerTextStyle">{data?.product_details?.product_name}</h1>
    </div>
  )
}

export default ProductHeader1;
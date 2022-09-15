import React from "react";
import { useSelector } from "react-redux";
import { productDetails } from "../redux/commonReducer";
import "./css/productHeader2.css";

const ProductHeader2 = () => {

  const data = useSelector(productDetails);

  return(
    <div className = "container container-content">
      <ul className = "breadcrumb v2">
        <li>
          <a>Home</a>
        </li>
        <span>{">"}</span>
        <li>
          <a>Shop</a>
        </li>
        <span>{">"}</span>
        <li className = "active" 
          style = {{color: "rgb(10, 58, 50)",textTransform : "capitalize"}}
        >
          {data?.product_details?.product_name ?? ""}
        </li>
      </ul>
    </div>
  )
}

export default ProductHeader2;
import React from "react";
import { useSelector } from "react-redux";
import { productDetails } from "../redux/commonReducer";
import "./css/description.css";

const Description = () => {
  
  const data = useSelector(productDetails);

  return(
    <div className = "container  mt-10" id ="descriptionId">
      <div className = "descriptionStyle">
        <div className = "descriptionBoxStyle">Description</div>
      </div>
      <div className = "contentStyle">
        <p className = "descriptionContentStyle">{data?.product_details?.product_description}</p>
      </div>
    </div>
  )
}

export default Description;
import React from "react";
import ProductRightDetails from "./productRight";
import ProductLeftDetails from "./productLeft";
import Description from "./description";

const ProductDetails = () => {
  return(
    <div className = "container">
      <div className = "row">
        <ProductLeftDetails />
        <ProductRightDetails />
      </div>
      <div>
        <Description />
      </div>
  </div>
  )
}

export default ProductDetails;
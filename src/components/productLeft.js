import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./css/productLeft.css";
import { useSelector } from "react-redux";
import { productDetails } from "../redux/commonReducer";

const ProductLeftDetails = () => {

  const data = useSelector(productDetails);

  return(
    <div className = "col-xs-12 col-sm-6 col-md-6 caroselFullStyle">
      <Carousel selectedItem={data?.product_details?.product_images?.findIndex((item)=> item == data?.product_details?.color?.filter(ele => ele.selected == 1)[0].display_images[0] )}>
        {data?.product_details?.product_images?.map((ele, i) => {
          return(
            <div key = {i} className = "cauroselStyle">
                <img src = {ele} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default ProductLeftDetails;
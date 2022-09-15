import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getData} from "../redux/actionCreator";
import Header from "../components/header";
import ProductHeader1 from "../components/productHeader1";
import ProductHeader2 from "../components/productHeader2"
import ProductDetails from "../components/productDetails";
import Footer from "../components/footer";

const Product = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    // eslint-disable-next-line
  },[])

  return(
    <div>
      <Header/>
      <ProductHeader1/>
      <ProductHeader2/>
      <ProductDetails />
      <Footer />
    </div>
  )
}

export default Product;
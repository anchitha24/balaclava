import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetails, updateRedux } from "../redux/commonReducer";
import "./css/productRight.css";

const ProductRightDetails = () => {

  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const data = useSelector(productDetails);

  const onDecrementHandler = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  const onIncrementHandler = () => {
    setCount(count + 1)
  }
  const readMoreHandler = () => {
    let ele = document.getElementById("descriptionId");
    ele.scrollIntoView()
  }
  const onSizeChangeHandler = (e) => {
    let sizeArr = data.product_details?.size?.map(ele => {
      let temp = {...ele}
      if(ele.size_id == e.target.value) {
        temp.selected = 1
      } else {
        temp.selected = 0
      }
      return temp
    })
    let obj = {...data, product_details : {...data.product_details,size : sizeArr}}
    dispatch(updateRedux({key : "productDetails", value : obj}))
  }

  const onColorChangeHandler = (colorId) => {
    let colorArr = data.product_details?.color?.map(ele => {
      let temp = {...ele}
      if(ele.color_id == colorId) {
        temp.selected = 1
      } else {
        temp.selected = 0
      }
      return temp
    })
    let obj = {...data, product_details : {...data.product_details,color : colorArr}}
    dispatch(updateRedux({key : "productDetails", value : obj}))
  }

  return(
    <div className = "col-xs-12 col-sm-6 col-md-6">
      <div className = "">
        <h3 className = "productTtitle titleColor">{data?.product_details?.product_name}</h3>
        <div className = "mtb-10">
          <span className = "titleColor">
            {
             data?.product_details?.color?.filter(ele => ele.selected == 1)[0].prize_array?.filter(i => i.size_attribite_id == data?.product_details?.size?.filter(ele => ele.selected == 1)[0].size_id)[0]?.product_price
              ? `AED ${data?.product_details?.color?.filter(ele => ele.selected == 1)[0].prize_array?.filter(i => i.size_attribite_id == data?.product_details?.size?.filter(ele => ele.selected == 1)[0].size_id)[0]?.product_price}`
              : "No combination available"
            }
          </span>
        </div>
        <div className = "mb-60">
          <p className = "productDesc">
            {data?.product_details?.product_description?.slice(0,100)}
            <a className = "readMore" onClick={() => readMoreHandler()}>...Read More</a>
          </p>
        </div>
        <div className = "d-flex flex-column">
          <label className = "specLabel mb-2">Color :</label>
          <div className = "d-flex">
            {data?.product_details?.color?.map(ele => {
              return <div key = {ele.color_id} 
                  onClick = {() => onColorChangeHandler(ele.color_id)}
                  style = {{backgroundColor : ele.color_code,
                    borderRadius : "50%",
                    border : "1px solid #d4d4d4",
                    height : "30px",
                    width : "30px",
                    marginRight : "3px"
                  }}
                className = {data?.product_details?.color?.filter(i => i.selected == 1)[0].color_id == ele.color_id ? "colorBorderStyle" : ""}></div>
            })}
            <div></div>
            <div></div>
          </div>
        </div> 
        <div className = "d-flex flex-column">
          <label className = "specLabel mb-2">Size :</label>
          <div className = "d-flex">
            <select className = "sizeSelect"
              value = {data?.product_details?.size?.filter(ele => ele.selected == 1)[0].size_id}
              onChange = {(e)=>onSizeChangeHandler(e)}>
              {
                data?.product_details?.size?.map((ele) => {
                  return <option key = {ele.size_id} value = {ele.size_id}>{ele.size_name}</option>
                })
              }
            </select>
            <a 
              href = {data?.product_details?.size_guide} 
              target = "_blank" 
              className = "sizeGuide">
                Size guide
            </a>
          </div>
        </div>
        <div className = "d-flex container mt-5">
          <div className = "d-flex justify-content-between quantityFullStyle">
            <button className = "quantityButtonStyle" onClick = {() => onDecrementHandler()}>-</button>
            <div className = "inputStyle">{count}</div>
            <button className = "quantityButtonStyle" onClick = {() => onIncrementHandler()}>+</button>
          </div>
          <div>
            <button className = "AddCartButton">
              <i className = "fa fa-shopping-cart cartIcon p-2" aria-hidden = "true" />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <hr className = "lineTopStyle"/>
        <p className = "skuDisplay">
          <span className = "noteStyle">SKU </span>
          <span>
           :{data?.product_details?.color?.filter(ele => ele.selected == 1)[0].prize_array?.filter(i => i.size_attribite_id == data?.product_details?.size?.filter(ele => ele.selected == 1)[0].size_id)[0]?.product_sku
            ?data?.product_details?.color?.filter(ele => ele.selected == 1)[0].prize_array?.filter(i => i.size_attribite_id == data?.product_details?.size?.filter(ele => ele.selected == 1)[0].size_id)[0]?.product_sku
            : "N/A"}
          </span>
        </p>
    </div>
  </div>
  )
}

export default ProductRightDetails;
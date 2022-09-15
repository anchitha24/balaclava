import axios from 'axios';
import { updateRedux } from './commonReducer';

export const getData = () => async (dispatch) => {

  try {
    let response = await axios.get("https://backprocess.balaclavafashion.com/api/v1/getProductsDetails?product_id=67");
    dispatch(updateRedux({key : "productDetails", value : response.data}))
  } catch (error) {
    console.log(error)
  }

}
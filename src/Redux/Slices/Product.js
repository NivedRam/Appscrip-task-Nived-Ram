import { createSlice } from "@reduxjs/toolkit";
// import { dispatch } from "../store"; // Make sure this import is correct
import axios from "axios"; // Add this import
const API =  'https://fakestoreapi.com';

const initialState = {
  isLoading: false,
  error: null,
  product: [],
};

const productSlice = createSlice({
  name: "production",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.product = action.payload; // Correct the state property to eventError
    },

    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload; // Use the spread operator
    },
  },
});
export const { startLoading, hasError, getProductSuccess } = productSlice.actions;


export default productSlice.reducer;


export  function getProduct(category) {
    return async (dispatch) => {
      dispatch(productSlice.actions.startLoading()); // Use the imported startLoading action
      try {
        const response = await axios.get(`${API}/products/`);
        console.log("response", response.data);
      // Dispatch addEventSuccess with the response data
      dispatch(getProductSuccess(response.data));
      return response;
      } catch (error) {
        console.log("Error", error);
        dispatch(hasError(error.message)); // Use the imported hasError action
      }
    };
  }
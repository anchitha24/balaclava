import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
    name : 'commonReducer',
    initialState : {
        productDetails: {},
    },
    reducers : {
        updateRedux: (state, data) => {
            state[data.payload.key] = data.payload.value
        },
    },
})

export const { updateRedux } = commonSlice.actions;

export const productDetails = (state) => state.commonReducer.productDetails;

export default commonSlice.reducer;
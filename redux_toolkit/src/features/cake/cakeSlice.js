import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//The createSlice function from Redux Toolkit is used to create a "slice" of the Redux state. 


//A slice combines state, reducers, and actions into a single cohesive structure.

const initialState = {
    numCakes: 10
}
//creating slice -> argument = object =>name of slice,initialState,reducers
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers:
    {
        ordered: (state) => {
            state.numCakes--
        },
        restocked: (state, action) => {
            state.numCakes += action.payload
        }
    }
})
// Redux Toolkit automatically generates action creators for each reducer

// Exporting the Reducer and Actions
export default cakeSlice.reducer
export const {ordered,restocked}= cakeSlice.actions
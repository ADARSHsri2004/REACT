import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ordered as cakeOrdered} from "../cake/cakeSlice";
const initialState = {
    numCream: 20
}
const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numCream--
        },
        restocked: (state, action) => {
            state.numCream += action.payload
        }
    },
    //Used to handle actions that are not defined within the current slice.
    extraReducers: (builder) => {
        //By using addCase, the current slice is listening to this action even though it originates from a different slice.
        builder.addCase(cakeOrdered, (state) => {
            state.numCream-- 
        })
    }
})
export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions
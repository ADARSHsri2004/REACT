import cakeReducer from '../features/cake/cakeSlice'
import creamReducer from '../features/ice_cream/iceCreamSlice'
import userReducer from '../features/user/userSlice'
//configureStore simplify the creation of the Redux store.
// It automatically sets up commonly used middleware (like redux-thunk) and Redux DevTools for easier debugging.
import { configureStore } from '@reduxjs/toolkit'

// const logger = reduxLogger.createLogger()

const store = configureStore(
    {
        reducer: {
            cake: cakeReducer,
            iceCream: creamReducer,
            user:userReducer
            //The cakeReducer manages the state of the cake slice.
        },
        // middleware: (getDefaultMIddleware) => getDefaultMIddleware().concat(logger) 
    }
)
export default store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Jwt'


const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export default store


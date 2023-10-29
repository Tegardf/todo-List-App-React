
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/toDo-Reducer";

const store = configureStore({
    reducer:{
        toDos:todoReducer
    }
})

export default store
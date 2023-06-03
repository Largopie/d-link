import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger"
import counterReducer from "@store/slices/counterSlice"

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
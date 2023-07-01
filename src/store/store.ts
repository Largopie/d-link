import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger"
import counterReducer from "@store/slices/counterSlice"
import noticeReducer from "@store/slices/noticeSlice"
import timetableReducer from "@store/slices/timetableSlice"

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        counter: counterReducer,
        notice: noticeReducer,
        timetable: timetableReducer,
    },
    middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
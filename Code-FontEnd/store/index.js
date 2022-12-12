import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import areaReducer from './slices/area'
import roomReducer from './slices/room'
import studentReducer from './slices/student'

const store = configureStore({
    reducer: {
        User    : userReducer,
        Area : areaReducer,
        Room : roomReducer,
        Student: studentReducer
    },
})

export default store


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RoomService from "../../services/room";
import showNotice from "../../help/ShowToast";

export const fetchListRoom = createAsyncThunk(
  "room/fetchListRoom",
  async (data, thunkAPI) => {
    const { floor,idArea } = data.data;
    const response = await RoomService.getListRoom({idArea, floor});
    return response.data;
  }
);

const roomSlice = createSlice({
  name: "Room",
  initialState: {
    listRoom: [],
    update: [],
    create: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchListRoom.fulfilled, (state, action) => {
        return {
          ...state,
          listRoom: action.payload.data,
        };
      })
      .addCase(fetchListRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

  },
});

export const {  } = roomSlice.actions;
export default roomSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AreaService from "../../services/area";
import showNotice from "../../help/ShowToast";

export const fetchCreateArea = createAsyncThunk(
  "area/fetchCreateArea",
  async (data, thunkAPI) => {
    const { NameArea, Describe, Status, Date_created } = data.data;
    const response = await AreaService.createArea({
      NameArea, Describe, Status, Date_created
    });
    return response.data;
  }
);

export const fetchListArea = createAsyncThunk(
  "area/fetchListArea",
  async (data, thunkAPI) => {
    const response = await AreaService.getListArea();
    return response.data;
  }
);

export const fetchUpdateArea = createAsyncThunk(
  "area/fetchUpdateArea",
  async (data, thunkAPI) => {
    const { Id, NameArea, Status, Date_created, Describe } = data.data;

    const response = await AreaService.updateArea({
      Id,
      NameArea,
      Status,
      Date_created,
      Describe,
    });
    return response.data;
  }
);

const areaSlice = createSlice({
  name: "Area",
  initialState: {
    user: {},
    listArea: [],
    update: [],
    create:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      //   .addCase(fetchCreateAccount.fulfilled, (state, action) => {})
      //   .addCase(fetchCreateAccount.rejected, (state, action) => {
      //     console.log(action.error.message);
      //   })
      //   .addCase(fetchUserLogin.fulfilled, (state, action) => {
      //     if (action.payload.message === "Đăng nhập thành công") {
      //       showNotice(action.payload.message);
      //       state.user = action.payload.data;
      //     } else {
      //       showNotice(action.payload.message, true);
      //     }
      //   })
      //   .addCase(fetchUserLogin.rejected, (state, action) => {
      //     console.log(action);
      //   })

      .addCase(fetchCreateArea.fulfilled, (state, action) => {
        showNotice('Tạo khu thành công')
        return {
          ...state,
          create: action.payload.data
        }
      })
      .addCase(fetchCreateArea.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchListArea.fulfilled, (state, action) => {
        return {
          ...state,
          listArea: action.payload.data,
        };
      })
      .addCase(fetchListArea.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateArea.fulfilled, (state, action) => {
        state.update = action.payload.data;
      })
      .addCase(fetchUpdateArea.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { checkUpdate } = areaSlice.actions;
export default areaSlice.reducer;

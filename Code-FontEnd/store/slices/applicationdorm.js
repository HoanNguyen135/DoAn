import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApplicationDormServices from "../../services/applicationdorm";
import showNotice from "../../help/ShowToast";

export const fetchListApplication = createAsyncThunk(
  "application/fetchListApplication",
  async (data, thunkAPI) => {
    const current_page = data.current_page;
    const response = await ApplicationDormServices.getListApplication({
      current_page,
    });
    return response.data;
  }
);

export const fetchNumberPage = createAsyncThunk(
  "application/fetchNumberPage",
  async (data, thunkAPI) => {
    const response = await ApplicationDormServices.getNumberPage();
    return response.data;
  }
);

export const fetchUpdateStatus = createAsyncThunk(
  "application/fetchUpdateStatus",
  async (data, thunkAPI) => {
    const { Status, idDonDK } = data.data;
    const response = await ApplicationDormServices.updateStatusApplication({
      Status,
      idDonDK,
    });
    return response.data;
  }
);

const applicationSlice = createSlice({
  name: "Application",
  initialState: {
    listApplication: [],
    update: [],
    numberPage: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUpdateStatus.fulfilled, (state, action) => {
        if (action.payload.message == "Duyệt đơn thành công") {
          showNotice("Đã duyệt đơn thành công");
          return {
            ...state,
            update: action.payload.data,
          };
        } else {
          showNotice("Từ chối đơn thành công", "danger");
          return {
            ...state,
            update: action.payload.data,
          };
        }
      })
      .addCase(fetchUpdateStatus.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchListApplication.fulfilled, (state, action) => {
        return {
          ...state,
          listApplication: action.payload.data,
        };
      })
      .addCase(fetchListApplication.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = applicationSlice.actions;
export default applicationSlice.reducer;

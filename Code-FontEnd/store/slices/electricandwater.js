import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ElectricAndWaterServices from "../../services/electricwater";
import showNotice from "../../help/ShowToast";

export const fetchListElectricAndWater = createAsyncThunk(
  "electricwater/fetchListElectricAndWater",
  async (data, thunkAPI) => {
    const { current_page, idKhu } = data;
    const response = await ElectricAndWaterServices.getListElectricAndWater({
      current_page,
      idKhu,
    });
    return response.data;
  }
);

export const fetchNumberPage = createAsyncThunk(
  "electricwater/fetchNumberPage",
  async (data, thunkAPI) => {
    const idKhu = 1;
    const response = await ElectricAndWaterServices.getNumberPage({ idKhu });
    return response.data;
  }
);


export const fetchDeleteElectricAndWater = createAsyncThunk(
  "electricwater/fetchDeleteElectricAndWater",
  async (data, thunkAPI) => {
    const {idDienNuoc,idKhu} = data;
    const response = await ElectricAndWaterServices.deleteElectricAndWater({ idDienNuoc,idKhu });
    return response.data;
  }
);

export const fetchAddElecAndWater = createAsyncThunk(
  "electricwater/fetchAddElecAndWater",
  async (data, thunkAPI) => {
    const {
      Date_created,
      Rooms,
      NewNumberElectric,
      NewNumberWater,
      Status,
      idKhu,
    } = data;
    const response = await ElectricAndWaterServices.addElectricAndWater({
      Date_created,
      Rooms,
      NewNumberElectric,
      NewNumberWater,
      Status,
      idKhu,
    });
    return response.data;
  }
);

const electricwaterSlice = createSlice({
  name: "ElectricWater",
  initialState: {
    listElecWater: [],
    update: [],
    numberPage: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      //   .addCase(fetchUpdateStatus.fulfilled, (state, action) => {
      //     if (action.payload.message == "Duyệt đơn thành công") {
      //       showNotice("Đã duyệt đơn thành công");
      //       return {
      //         ...state,
      //         update: action.payload.data,
      //       };
      //     } else {
      //       showNotice("Từ chối đơn thành công", "danger");
      //       return {
      //         ...state,
      //         update: action.payload.data,
      //       };
      //     }
      //   })
      //   .addCase(fetchUpdateStatus.rejected, (state, action) => {
      //     console.log(action.error.message);
      //   })
      .addCase(fetchListElectricAndWater.fulfilled, (state, action) => {
        return {
          ...state,
          listElecWater: action.payload.data,
        };
      })
      .addCase(fetchListElectricAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchAddElecAndWater.fulfilled, (state, action) => {
        showNotice('Thêm tiền điện nước thành công')
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchAddElecAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteElectricAndWater.fulfilled, (state, action) => {
        showNotice('Xóa tiền điện nước thành công')
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteElectricAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      })
  },
});

export const {} = electricwaterSlice.actions;
export default electricwaterSlice.reducer;

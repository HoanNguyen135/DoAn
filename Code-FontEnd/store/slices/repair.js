import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepairService from "../../services/repair";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchCreateRepair = createAsyncThunk(
  "repair/fetchCreateRepair",
  async (data, thunkAPI) => {
    const { NameRoom, ContentRepair, Status, Date_created } = data;
    const response = await RepairService.createRepair({
      NameRoom,
      ContentRepair,
      Status,
      Date_created: formatDateMySQL(Date_created),
    });
    return response.data;
  }
);

export const fetchListRepair = createAsyncThunk(
  "repair/fetchListRepair",
  async (data, thunkAPI) => {
    const response = await RepairService.getListRepair();
    return response.data;
  }
);

// export const fetchUpdateArea = createAsyncThunk(
//   "area/fetchUpdateArea",
//   async (data, thunkAPI) => {
//     const { Id, NameArea, Status, Date_created, Describe } = data.data;

//     const response = await AreaService.updateArea({
//       Id,
//       NameArea,
//       Status,
//       Date_created,
//       Describe,
//     });
//     return response.data;
//   }
// );

const repairSlice = createSlice({
  name: "Repair",
  initialState: {
    user: {},
    listRepair: [],
    update: [],
    create: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder

      .addCase(fetchListRepair.fulfilled, (state, action) => {
        return {
          ...state,
          listRepair: action.payload.data,
        };
      })
      .addCase(fetchListRepair.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchCreateRepair.fulfilled, (state, action) => {
        showNotice("Tạo sửa chữa thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchCreateRepair.rejected, (state, action) => {
        console.log(action.error.message);
      })

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

      

    //   .addCase(fetchListArea.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       listArea: action.payload.data,
    //     };
    //   })
    //   .addCase(fetchListArea.rejected, (state, action) => {
    //     console.log(action.error.message);
    //   })

    //   .addCase(fetchUpdateArea.fulfilled, (state, action) => {
    //     state.update = action.payload.data;
    //   })
    //   .addCase(fetchUpdateArea.rejected, (state, action) => {
    //     console.log(action.error.message);
    //   });
  },
});

export const {} = repairSlice.actions;
export default repairSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepairService from "../../services/repair";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchCreateRepair = createAsyncThunk(
  "repair/fetchCreateRepair",
  async (data, thunkAPI) => {
    const {
      NameRoom,
      ContentRepair,
      Status,
      Date_created,
      FullName,
      Describe,
    } = data;
    const response = await RepairService.createRepair({
      NameRoom,
      ContentRepair,
      Status,
      Date_created: formatDateMySQL(Date_created),
      FullName,
      Describe,
    });
    return response.data;
  }
);

export const fetchCreateRepairOfStudent = createAsyncThunk(
  "repair/fetchCreateRepairOfStudent",
  async (data, thunkAPI) => {
    const { FullName, idPhong, ContentRepair, Describe, Date_created } = data;
    const response = await RepairService.createRepairOfStudent({
      FullName,
      idPhong,
      ContentRepair,
      Describe,
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

export const fetchGetListRepairOfStudent = createAsyncThunk(
  "repair/fetchGetListRepairOfStudent",
  async (data, thunkAPI) => {
    const { idPhong } = data;
    console.log(idPhong);
    const response = await RepairService.getListRepairOfStudent({ idPhong });
    return response.data;
  }
);

export const fetchDeleteRepair = createAsyncThunk(
  "repair/fetchDeleteRepair",
  async (data, thunkAPI) => {
    const { idSuaChua } = data;
    const response = await RepairService.deleteRepair({ idSuaChua });
    return response.data;
  }
);

export const fetchUpdateRepair = createAsyncThunk(
  "repair/fetchUpdateRepair",
  async (data, thunkAPI) => {
    const {
      Describe,
      Status,
      Date_created,
      ContentRepair,
      FullName,
      idSuaChua,
    } = data.data;
    const response = await RepairService.updateRepair({
      Describe,
      Status,
      Date_created,
      ContentRepair,
      FullName,
      idSuaChua,
    });
    return response.data;
  }
);

const repairSlice = createSlice({
  name: "Repair",
  initialState: {
    user: {},
    listRepair: [],
    update: [],
    create: [],
    listRepairOfStudent: [],
    updateOfStudent: [],
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
        if (action.payload.message == "T??n ph??ng kh??ng t???n t???i") {
          showNotice("T??n ph??ng kh??ng t???n t???i", "danger");
          return {
            ...state,
            update: action.payload.data,
          };
        } else {
          showNotice("T???o s???a ch???a th??nh c??ng");
          return {
            ...state,
            update: action.payload.data,
          };
        }
      })
      .addCase(fetchCreateRepair.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchCreateRepairOfStudent.fulfilled, (state, action) => {
        showNotice("B??o s???a ch???a th??nh c??ng");
        return {
          ...state,
          updateOfStudent: action.payload.data,
        };
      })
      .addCase(fetchCreateRepairOfStudent.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchGetListRepairOfStudent.fulfilled, (state, action) => {
        return {
          ...state,
          listRepairOfStudent: action.payload.data,
        };
      })
      .addCase(fetchGetListRepairOfStudent.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUpdateRepair.fulfilled, (state, action) => {
        showNotice("C???p nh???t s???a ch???a th??nh c??ng");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateRepair.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteRepair.fulfilled, (state, action) => {
        showNotice("X??a s???a ch???a th??nh c??ng");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteRepair.rejected, (state, action) => {
        console.log(action.error.message);
      });

    //   .addCase(fetchCreateAccount.fulfilled, (state, action) => {})
    //   .addCase(fetchCreateAccount.rejected, (state, action) => {
    //     console.log(action.error.message);
    //   })
    //   .addCase(fetchUserLogin.fulfilled, (state, action) => {
    //     if (action.payload.message === "????ng nh???p th??nh c??ng") {
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

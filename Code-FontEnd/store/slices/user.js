import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user";
import showNotice from "../../help/ShowToast";

export const fetchCreateAccount = createAsyncThunk(
  "user/fetchCreateAccount",
  async (data, thunkAPI) => {
    const { Username, Email, Password, Date } = data.data;
    const response = await UserService.createAccount({
      userName: Username,
      email: Email,
      password: Password,
      date_created: Date,
    });
    return response.data;
  }
);

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (data, thunkAPI) => {
    const { Username, Password } = data;
    const response = await UserService.login({
      userName: Username,
      passWord: Password,
    });
    return response.data;
  }
);

export const fetchListUser = createAsyncThunk(
  "user/fetchListUser",
  async (data, thunkAPI) => {
    const response = await UserService.getListUser();
    return response.data;
  }
);

export const fetchUpdateUser = createAsyncThunk(
  "user/fetchUpdateUser",
  async (data, thunkAPI) => {
    const { Username, Position, Email, Date_created, Password, Note, Id } =
      data.data;
    const response = await UserService.updateUser({
      Username,
      Position,
      Email,
      Date_created,
      Password,
      Note,
      Id,
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: {},
    listUser: [],
    update: []
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchCreateAccount.fulfilled, (state, action) => {
        showNotice('Đăng ký tài khoản thành công')
      })
      .addCase(fetchCreateAccount.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        if (action.payload.message === "Đăng nhập thành công") {
          showNotice(action.payload.message);
          state.user = action.payload.data;
        } else {
          showNotice(action.payload.message, true);
        }
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        console.log(action);
      })

      .addCase(fetchListUser.fulfilled, (state, action) => {
        return {
          ...state,
          listUser: action.payload.data,
        };
      })
      .addCase(fetchListUser.rejected, (state, action) => {
        console.log(action.error.message);
      })

    .addCase(fetchUpdateUser.fulfilled, (state, action) => {
      showNotice('Cập nhật tài khoản thành công')
      state.update = action.payload.data
    })
    .addCase(fetchUpdateUser.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const {checkUpdate} = userSlice.actions;
export default userSlice.reducer;

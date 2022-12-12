import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentService from "../../services/student";
import showNotice from "../../help/ShowToast";

export const fetchListStudentInRoom = createAsyncThunk(
  "student/fetchListStudentInRoom",
  async (data, thunkAPI) => {
    const { idArea, idRoom } = data;
    const response = await StudentService.getListStudentInRoom({
      idArea,
      idRoom,
    });
    return response.data;
  }
);

export const fetchUpdateInfoStudent = createAsyncThunk(
  "student/fetchUpdateInfoStudent",
  async (data, thunkAPI) => {
    const {
      FullName,
      MSV,
      Birthday,
      Sex,
      Ethnic,
      CCCD,
      Country,
      Major,
      Email,
      Class,
      Address,
      Name_Father,
      PhoneNumber_Father,
      Name_Mother,
      PhoneNumber_Mother,
      Email_Parent,
      PhoneNumber,
      idSV
    } = data;

    const response = await StudentService.updateStudent({
      FullName,
      MSV,
      Birthday,
      Sex,
      Ethnic,
      CCCD,
      Country,
      Major,
      Email,
      Class,
      Address,
      Name_Father,
      PhoneNumber_Father,
      Name_Mother,
      PhoneNumber_Mother,
      Email_Parent,
      PhoneNumber,
      idSV
    });
    return response.data;

  }
);

const studentSlice = createSlice({
  name: "Student",
  initialState: {
    listStudentInRoom: [],
    update: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder

      .addCase(fetchListStudentInRoom.fulfilled, (state, action) => {
        return {
          ...state,
          listStudentInRoom: action.payload.data,
        };
      })
      .addCase(fetchListStudentInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateInfoStudent.fulfilled, (state, action) => {
        showNotice('Cập nhật thông tin thành công')
        return{
          ...state,
          update: action.payload.data
        }
      })
      .addCase(fetchUpdateInfoStudent.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = studentSlice.actions;
export default studentSlice.reducer;

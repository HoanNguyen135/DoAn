import { api } from ".";

const StudentService = {
//   createArea({
//     NameArea, Describe, Status, Date_created
//   } = {}) {
//     return api.call().post("/create-new-area", {
//       NameArea, Describe, Status, Date_created
//     });
//   },

getListStudentInRoom({idArea,idRoom}={}) {
    return api.call().get(`/getListStudentInRoom/${idArea}/${idRoom}`,{
        params:{
            idArea,
            idRoom
        }
    });
  },

  updateStudent({ FullName,MSV,Birthday,Sex,Ethnic,CCCD,Country,Major,Email,Class,Address,Name_Father,PhoneNumber_Father,Name_Mother,PhoneNumber_Mother,Email_Parent,PhoneNumber,idSV } = {}) {
    return api.call().put("/updateStudent", {
        FullName,MSV,Birthday,Sex,Ethnic,CCCD,Country,Major,Email,Class,Address,Name_Father,PhoneNumber_Father,Name_Mother,PhoneNumber_Mother,Email_Parent,PhoneNumber,idSV
    });
  },
};

export default StudentService;

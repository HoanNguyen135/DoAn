import { api } from ".";

const RoomService = {
//   createArea({
//     NameArea, Describe, Status, Date_created
//   } = {}) {
//     return api.call().post("/create-new-area", {
//       NameArea, Describe, Status, Date_created
//     });
//   },

  getListRoom({idArea,floor}={}) {
    return api.call().get(`/getListRoom/${idArea}/${floor}`,{
        params:{
            idArea,
            floor
        }
    });
  },

//   updateArea({ Id, NameArea, Status, Date_created, Describe } = {}) {
//     return api.call().put("/update-area", {
//       Id,
//       NameArea,
//       Status,
//       Date_created,
//       Describe,
//     });
//   },
};

export default RoomService;

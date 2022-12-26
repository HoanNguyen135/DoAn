import { api } from ".";

const RoomService = {
  createRoom({
    Describe, NameRoom, Status, Date_created,idKhu,NumberLimit,Floor
  } = {}) {
    return api.call().post("/createRoom", {
      Describe, NameRoom, Status, Date_created,idKhu,NumberLimit,Floor
    });
  },

  getListRoom({idArea,floor}={}) {
    return api.call().get(`/getListRoom/${idArea}/${floor}`,{
        params:{
            idArea,
            floor
        }
    });
  },

  updateRoom({ Describe, NameRoom, Status, Date_created,NumberLimit,Floor,idPhong,idKhu } = {}) {
    return api.call().put("/updateRoom", {
      Describe, NameRoom, Status, Date_created,NumberLimit,Floor,idPhong,idKhu
    });
  },

  deleteRoom({ idPhong,idKhu,Floor } = {}) {
    return api.call().post("/deleteRoom", {
      idPhong,idKhu,Floor
    });
  },
};

export default RoomService;

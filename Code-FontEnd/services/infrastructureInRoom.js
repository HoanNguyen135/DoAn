import { api } from ".";

const InfrastructureInRoomService = {
  getListInfrastructureInRoom({ idPhong, idKhu }) {
    return api.call().post(`/getListInfrastructureInRoom`, {
      idPhong,
      idKhu,
    });
  },
  updateInfrastructureInRoom({
    Number,
    NumberGood,
    Note = "",
    NumberBad,
    Date_created,
    idCsvcPhong,
  } = {}) {
    return api.call().put("/updateInfrastructureInRoom", {
      Number,
      NumberGood,
      Note,
      NumberBad,
      Date_created,
      idCsvcPhong,
    });
  },
  deleteInfrastructureInRoom({ idCsvcPhong }) {
    return api.call().post(`/deleteInfrastructureInRoom`, {
      idCsvcPhong,
    });
  },
};

export default InfrastructureInRoomService;

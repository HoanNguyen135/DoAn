import { api } from ".";

const RepairService = {
  createRepair({ NameRoom, ContentRepair, Status, Date_created } = {}) {
    return api.call().post("/createRepair", {
      NameRoom,
      ContentRepair,
      Status,
      Date_created,
    });
  },

  getListRepair() {
    return api.call().get(`/getListRepair`);
  },

  updateArea({ Id, NameArea, Status, Date_created, Describe } = {}) {
    return api.call().put("/update-area", {
      Id,
      NameArea,
      Status,
      Date_created,
      Describe,
    });
  },
};

export default RepairService;

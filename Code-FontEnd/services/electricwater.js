import { api } from ".";

const ElectricAndWaterServices = {
  getNumberPage({ idKhu } = {}) {
    return api.call().post("/getNumberPageElecAndWater", {
      idKhu,
    });
  },
  getListElectricAndWater({ current_page = 1, idKhu } = {}) {
    return api.call().post(`/getListElectricAndWater`, {
      current_page,
      idKhu,
    });
  },
  addElectricAndWater({
    Date_created,
    Rooms,
    NewNumberElectric,
    NewNumberWater,
    Status,
    idKhu,
  } = {}) {
    return api.call().post("/addElectricAndWater", {
      Date_created,
      Rooms,
      NewNumberElectric,
      NewNumberWater,
      Status,
      idKhu,
    });
  },
  deleteElectricAndWater({ idDienNuoc,idKhu } = {}) {
    return api.call().post(`/deleteElectricAndWater`, {
      idDienNuoc,idKhu
    });
  },
  //   updateStatusApplication({Status,idDonDK}={}){
  //     return api.call().post('/updateStatusApplication',{
  //       Status,idDonDK
  //     })
  //   }
};

export default ElectricAndWaterServices;

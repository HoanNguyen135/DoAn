import { api } from ".";

const ApplicationDormServices = {
  getNumberPage() {
    return api.call().get("/getNumberPage");
  },
  getListApplication({current_page}={}) {
    return api.call().get(`/getListApplication/${current_page}`,{
      params:{
        current_page
      }
    });
  },
  updateStatusApplication({Status,idDonDK}={}){
    return api.call().post('/updateStatusApplication',{
      Status,idDonDK
    })
  }
};

export default ApplicationDormServices;

import express from "express";
import apiController from "../controller/apiController";
import studentController from "../controller/studentController";
import userController from "../controller/userController";
import areaController from "../controller/areaController";
import roomController from "../controller/roomController";
import applicationDormController from "../controller/applicationDormController";
import violationController from "../controller/violationController";
import elecwaterController from "../controller/elecwaterController";
import infrastructureController from "../controller/infrastructureController";
import infrastructureInRoomController from "../controller/infrastructureInRoomController";
import repairController from "../controller/repairController";
import searchController from "../controller/searchController";
import profileController from "../controller/profileController";

let router = express.Router();

const initApiRoute = (app) => {
  router.get("/users", apiController.getAllUser);

  router.post("/create-new-user", apiController.createUser);

  //router.put("/update-user", apiController.updateUser);

  router.delete("/delete-user/:userId", apiController.deleteUser);

  router.post("/create-new-job", apiController.createJob);

  router.get("/getAllJob/:date", apiController.getAllJob);

  router.get("/login/:userName/:passWord", apiController.loginUser);

  //quan li sinh vien

  router.post("/addStudentInRoom", studentController.AddStudentInRoom);

  router.post(
    "/addStudentInRoomToFile",
    studentController.addStudentInRoomFromFile
  );

  router.get(
    "/getListStudentInRoom/:idArea/:idRoom",
    studentController.getListStudentInRoom
  );

  router.put("/updateStudent", studentController.updateStudent);

  router.put("/updateAvatar", studentController.updateAvatar);

  router.delete(
    "/removeStudentInRoom/:idSV",
    studentController.removeStudentInRoom
  );

  //Quan li tai khoan

  router.get("/getListUser", userController.getListUser);
  router.put("/update-user", userController.updateUser);

  router.post("/cancerUser", userController.cancerUser);

  router.get("/getListUserPermission", userController.getListUserPermission);

  router.post("/updateUserManage", userController.updateUserManage);

  router.post("/addUserManage", userController.addUserManage);

  router.post("/addUser", userController.addUser);

  // Quan li khu
  router.get("/getListArea", areaController.getListArea);
  router.put("/update-area", areaController.updateArea);
  router.post("/create-new-area", areaController.createArea);
  router.post("/deleteArea", areaController.deleteArea);

  //Quan li phong
  router.get("/getListRoom/:idArea/:floor", roomController.getListRoom);

  router.post("/createRoom", roomController.createRoom);

  router.put("/updateRoom", roomController.updateRoom);

  router.post("/deleteRoom", roomController.deleteRoom);

  router.post("/getListRoomRepair", roomController.getListRoomRepair);

  //quan li don dang ky o noi tru
  router.get(
    "/getListApplication/:current_page",
    applicationDormController.getListApplicationDorm
  );

  router.post(
    "/filterApplicationInDorm",
    applicationDormController.filterApplicationInDorm
  );

  router.post(
    "/acceptAllApplication",
    applicationDormController.acceptAllApplication
  );

  router.get("/getNumberPage", applicationDormController.getNumberPage);

  router.post(
    "/updateStatusApplication",
    applicationDormController.updateStatusApplication
  );

  //Quan li vi pham
  router.post(
    "/getListViolationOfStudent",
    violationController.getListViolationOfStudent
  );

  router.get(
    "/getListViolationInRoom/:idKhu/:idPhong",
    violationController.getListViolationInRoom
  );

  router.post("/addViolation", violationController.addViolation);

  router.put("/updateViolation", violationController.updateViolation);
  router.put("/deleteViolation", violationController.deleteViolation);

  //Quan li dien nuoc

  router.post("/getNumberPageElecAndWater", elecwaterController.getNumberPage);

  router.post(
    "/getListElectricAndWater",
    elecwaterController.getListElectricAndWater
  );

  router.post("/addElectricAndWater", elecwaterController.addElectricAndWater);

  router.post("/getPrice", elecwaterController.getPrice);

  router.post("/updatePrice", elecwaterController.updatePrice);

  router.post(
    "/updateElectricAndWater",
    elecwaterController.updateElectricAndWater
  );

  router.post(
    "/deleteElectricAndWater",
    elecwaterController.deleteElectricAndWater
  );

  //quan ly co so vat chat
  router.get(
    "/getListInfrastructure",
    infrastructureController.getListInfrastructure
  );

  router.post(
    "/createInfrastructure",
    infrastructureController.createInfrastructure
  );

  router.put(
    "/updateInfrastructure",
    infrastructureController.updateInfrastructure
  );

  router.post(
    "/deleteInfrastructure",
    infrastructureController.deleteInfrastructure
  );

  //quan li csvc trong phong

  router.post(
    "/getListInfrastructureInRoom",
    infrastructureInRoomController.getListInfrastructureInRoom
  );

  router.put(
    "/updateInfrastructureInRoom",
    infrastructureInRoomController.updateInfrastructureInRoom
  );

  router.post(
    "/deleteInfrastructureInRoom",
    infrastructureInRoomController.deleteInfrastructureInRoom
  );

  router.post(
    "/addInfrastructureInRoom",
    infrastructureInRoomController.createInfrastructureInRoom
  );

  //quan ly tim kiem

  router.post("/searchData", searchController.searchData);

  //quan ly sua chua
  router.get("/getListRepair", repairController.getListRepair);
  router.post("/createRepair", repairController.createRepair);
  router.post("/updateRepair", repairController.updateRepair);
  router.post("/deleteRepair", repairController.deleteRepair);
  router.post(
    "/getListRepairOfStudent",
    repairController.getListRepairOfStudent
  );
  router.post("/createRepairOfStudent", repairController.createRepairOfStudent);

  //sinh vien
  router.post(
    "/getDataRegisterInDorm",
    applicationDormController.getDataRegisterInDorm
  );
  router.post("/registerInDorm", applicationDormController.registerInDorm);

  //ho so sinh vien
  router.post("/getDataProfile", profileController.getDataProfile);
  router.get("/getListProfileStudent", profileController.getListProfileStudent);
  router.post("/updateProfile", profileController.updateProfile);
  router.put("/updateAvatarProfile", profileController.updateAvatar);

  return app.use("/api/", router);
};

export default initApiRoute;

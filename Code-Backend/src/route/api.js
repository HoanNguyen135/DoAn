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

  // Quan li khu
  router.get("/getListArea", areaController.getListArea);
  router.put("/update-area", areaController.updateArea);
  router.post("/create-new-area", areaController.createArea);

  //Quan li phong
  router.get("/getListRoom/:idArea/:floor", roomController.getListRoom);

  router.post("/createRoom", roomController.createRoom);

  router.put("/updateRoom", roomController.updateRoom);

  router.post("/deleteRoom", roomController.deleteRoom);

  //quan li don dang ky o noi tru
  router.get(
    "/getListApplication/:current_page",
    applicationDormController.getListApplicationDorm
  );

  router.get("/getNumberPage", applicationDormController.getNumberPage);

  router.post(
    "/updateStatusApplication",
    applicationDormController.updateStatusApplication
  );

  //Quan li vi pham
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

  //quan ly sua chua
  router.get("/getListRepair", repairController.getListRepair);
  router.post("/createRepair", repairController.createRepair);

  return app.use("/api/", router);
};

export default initApiRoute;

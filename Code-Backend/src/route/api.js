import express from "express";
import apiController from "../controller/apiController";
import studentController from "../controller/studentController";
import userController from "../controller/userController";
import areaController from "../controller/areaController";
import roomController from "../controller/roomController";

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

  router.get(
    "/checkExistInfoStudent/:idUser",
    studentController.checkExistInfoStudent
  );

  router.get(
    "/getListStudentInRoom/:idArea/:idRoom",
    studentController.getListStudentInRoom
  );


  router.put(
    "/updateStudent",
    studentController.updateStudent
  );

  router.get("/getListUser", userController.getListUser);
  router.put("/update-user", userController.updateUser);

  // Quan li khu
  router.get("/getListArea", areaController.getListArea);
  router.put("/update-area", areaController.updateArea);
  router.post("/create-new-area", areaController.createArea);


  //Quan li Nha
  router.get("/getListRoom/:idArea/:floor", roomController.getListRoom);

  return app.use("/api/", router);
};

export default initApiRoute;

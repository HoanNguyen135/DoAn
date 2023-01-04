import pool from "../configs/connectDb";
import multer from "multer";

let getHomePage = async (req, res) => {
  let data = [];

  const [rows, fields] = await pool.execute("SELECT * FROM `user`");

  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let id = req.params?.userId;

  const [rows, fields] = await pool.execute("SELECT * FROM `user` WHERE id=?", [
    id,
  ]);

  return res.render("index.ejs", { dataUser: rows });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  await pool.execute(
    "insert into user (firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );

  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let id = req.body.userId;
  await pool.execute("delete from user where id = ?", [id]);
  return res.redirect("/");
};

let editUser = async (req, res) => {
  let id = req.params.userId;

  const [rows, fields] = await pool.execute("SELECT * FROM `user` WHERE id=?", [
    id,
  ]);

  return res.render("update.ejs", { dataUser: rows[0] });
};

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;

  await pool.execute(
    "update user set firstName= ?, lastName = ? , email = ? , address= ? where id = ?",
    [firstName, lastName, email, address, id]
  );

  return res.redirect("/");
};

let getUpLoadFilePage = async (req, res) => {
  return res.render("uploadFile.ejs");
};



module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
  getUpLoadFilePage,
};

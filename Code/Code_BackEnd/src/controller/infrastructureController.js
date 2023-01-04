import pool from "../configs/connectDb";

let getListInfrastructure = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM csvc");
  return res.status(200).json({
    data: rows,
  });
};

let createInfrastructure = async (req, res) => {
  let { NameInfrastructure, Price, Describe, Status, Date_created } = req.body;

  await pool.execute(
    "insert into csvc (TenCsvc, GiaTien, MoTaCsvc,NgayTaoCsvc,TrangThai) values (?,?,?,?,?)",
    [NameInfrastructure, Price, Describe, Date_created, Status]
  );

  const [rows] = await pool.execute("SELECT * FROM csvc");

  return res.status(200).json({
    message: "Tạo cơ sở vật chất thành công",
    data: rows,
  });
};

let updateInfrastructure = async (req, res) => {
  let { NameInfrastructure, Price, Describe, Status, Date_created, idCsvc } =
    req.body;

  await pool.execute(
    "update csvc set TenCsvc=?, GiaTien=?, MoTaCsvc=?, TrangThai=?, NgayTaoCsvc=? WHERE idCsvc=?",
    [NameInfrastructure, Price, Describe, Status, Date_created, idCsvc]
  );

  const [rows] = await pool.execute("SELECT * FROM csvc");

  return res.status(200).json({
    message: "Cập nhật cơ sở vật chất thành công",
    data: rows,
  });
};

let deleteInfrastructure = async (req, res) => {
  const { idCsvc } = req.body;

  await pool.execute("delete from csvc where idCsvc = ?", [idCsvc]);

  const [rows] = await pool.execute("SELECT * FROM csvc");

  return res.status(200).json({
    message: "Xóa cơ sở vật chất thành công",
    data: rows,
  });
};

module.exports = {
  getListInfrastructure,
  createInfrastructure,
  updateInfrastructure,
  deleteInfrastructure,
};

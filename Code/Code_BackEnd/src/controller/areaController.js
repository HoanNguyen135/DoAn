import pool from "../configs/connectDb";

let getListArea = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM khuvuc");

  return res.status(200).json({
    data: rows,
  });
};

let deleteArea = async (req, res) => {
  const { idKhu } = req.body;

  await pool.execute("delete from khuvuc where idKhu = ?", [idKhu]);

  const [rows] = await pool.execute("SELECT * FROM khuvuc");

  return res.status(200).json({
    message: "Xóa khu vực thành công",
    data: rows,
  });
};

let updateArea = async (req, res) => {
  let { NameArea, Status, Date_created, Describe, Id } = req.body;

  await pool.execute(
    "update khuvuc set TenKhu=?, MotaKhu=?, NgayTaoKhu=?, TrangThaiKhu=? WHERE idKhu=?",
    [NameArea, Status, Date_created, Describe, Id]
  );

  const [[rows]] = await pool.execute("SELECT * FROM khuvuc WHERE idKhu=?", [Id]);

  console.log(rows);

  return res.status(200).json({
    message: "Cập nhật khu thành công",
    data: rows,
  });
};

let createArea = async (req, res) => {
  let { Describe, NameArea, Status, Date_created } = req.body;

  await pool.execute(
    "insert into khuvuc (MoTaKhu, TenKhu, TrangThaiKhu,NgayTaoKhu) values (?,?,?,?)",
    [Describe, NameArea, Status, Date_created]
  );

  const [[rows]] = await pool.execute("SELECT * FROM khuvuc WHERE TenKhu=?", [
    NameArea,
  ]);

  return res.status(200).json({
    message: "Tạo khu thành công",
    data: rows,
  });
};

module.exports = {
  getListArea,
  updateArea,
  createArea,
  deleteArea,
};

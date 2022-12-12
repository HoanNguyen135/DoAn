import pool from "../configs/connectDb";

let getListRoom = async (req, res) => {
  const { idArea, floor } = req.params;

  const [rows] = await pool.execute(
    "SELECT * FROM room WHERE idKhu = ? and Tang=?",
    [idArea, floor]
  );

  return res.status(200).json({
    data: rows,
  });
};

// let updateArea = async (req, res) => {
//   let { NameArea, Status, Date_created, Describe, Id } = req.body;

//   await pool.execute(
//     "update area set TenKhu=?, Mota=?, NgayTao=?, TrangThai=? WHERE idKhu=?",
//     [NameArea, Status, Date_created, Describe, Id]
//   );

//   const [[rows]] = await pool.execute("SELECT * FROM area WHERE idKhu=?", [Id]);

//   console.log(rows);

//   return res.status(200).json({
//     message: "Cập nhật khu thành công",
//     data: rows,
//   });
// };

// let createArea = async (req, res) => {
//   let { Describe, NameArea, Status, Date_created } = req.body;

//   await pool.execute(
//     "insert into area (MoTa, TenKhu, TrangThai,NgayTao) values (?,?,?,?)",
//     [Describe, NameArea, Status, Date_created]
//   );

//   const [[rows]] = await pool.execute("SELECT * FROM area WHERE TenKhu=?", [NameArea]);

//   return res.status(200).json({
//     message: "Tạo khu thành công",
//     data: rows
//   });
// };

module.exports = {
    getListRoom,
};

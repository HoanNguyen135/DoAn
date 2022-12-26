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


let createRoom = async (req, res) => {
  let { Describe, NameRoom, Status, Date_created,idKhu,NumberLimit,Floor } = req.body;

  await pool.execute(
    "insert into room (MoTa, TenPhong, TrangThai,NgayTao,idKhu,SoLuong,Tang) values (?,?,?,?,?,?,?)",
    [Describe, NameRoom, Status, Date_created,idKhu,NumberLimit,Floor]
  );

  const [rows] = await pool.execute("SELECT * FROM room WHERE idKhu=? and Tang=?", [idKhu,Floor]);

  return res.status(200).json({
    message: "Tạo phòng thành công",
    data: rows
  });
};

let updateRoom = async (req, res) => {
  let { Describe, NameRoom, Status, Date_created,NumberLimit,Floor,idPhong,idKhu } = req.body;

  await pool.execute(
    "update room set TenPhong=?, Mota=?, NgayTao=?, TrangThai=? ,SoLuong=?,Tang=?  WHERE idPhong=?",
    [NameRoom, Describe, Date_created, Status,NumberLimit, Floor,idPhong]
  );

  const [rows] = await pool.execute("SELECT * FROM room WHERE idKhu=? AND Tang=?", [idKhu,Floor]);


  return res.status(200).json({
    message: "Cập nhật phòng thành công",
    data: rows,
  });
};

let deleteRoom = async (req, res) => {
  const { idPhong,idKhu,Floor} = req.body;

  await pool.execute("delete from room where idPhong = ?", [idPhong])

  const [rows] = await pool.execute("SELECT * FROM room WHERE idKhu=? AND Tang=?", [idKhu,Floor]);

  return res.status(200).json({
    message: "Xóa phòng thành công",
    data: rows
  });
};


module.exports = {
    getListRoom,
    createRoom,
    updateRoom,
    deleteRoom
};

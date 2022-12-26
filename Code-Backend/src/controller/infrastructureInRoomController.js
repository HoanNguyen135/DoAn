import pool from "../configs/connectDb";

let getListInfrastructureInRoom = async (req, res) => {
  const { idPhong, idKhu } = req.body;

  const [rows] = await pool.execute(
    "SELECT * FROM csvc_phong INNER JOIN csvc ON csvc.idCsvc = csvc_phong.idCsvc INNER JOIN room ON csvc_phong.idPhong = room.idPhong WHERE csvc_phong.idPhong= ? AND room.idKhu=?",
    [idPhong, idKhu]
  );
  return res.status(200).json({
    data: rows,
  });
};


let updateInfrastructureInRoom = async (req, res) => {
  let { Number, NumberGood, Note, NumberBad, Date_created, idCsvcPhong } =
    req.body;

  await pool.execute(
    "update csvc_phong set SoLuongCsvc=?, SoLuongConTot=?, GhiChu=?, SoLuongDaHong=?, NgayTaoCsvcPhong=? WHERE idCsvcPhong=?",
    [Number, NumberGood, Note, NumberBad, Date_created, idCsvcPhong]
  );

  const [rows] = await pool.execute("SELECT * FROM csvc_phong");

  return res.status(200).json({
    message: "Cập nhật cơ sở vật chất thành công",
    data: rows,
  });
};

let deleteInfrastructureInRoom = async (req, res) => {
  const { idCsvcPhong } = req.body;

  await pool.execute("delete from csvc_phong where idCsvcPhong = ?", [
    idCsvcPhong,
  ]);

  const [rows] = await pool.execute("SELECT * FROM csvc_phong");

  return res.status(200).json({
    message: "Xóa cơ sở vật chất thành công",
    data: rows,
  });
};


let createInfrastructureInRoom = async (req, res) => {
    let { NameInfrastructure, Price, Describe, Status, Date_created } = req.body;
  
    await pool.execute(
      "insert into csvc (TenCsvc, GiaTien, MoTa,NgayTaoCsvc,TrangThai) values (?,?,?,?,?)",
      [NameInfrastructure, Price, Describe, Date_created, Status]
    );
  
    const [rows] = await pool.execute("SELECT * FROM csvc");
  
    return res.status(200).json({
      message: "Tạo cơ sở vật chất thành công",
      data: rows,
    });
  };

module.exports = {
  getListInfrastructureInRoom,
  updateInfrastructureInRoom,
  deleteInfrastructureInRoom,
  createInfrastructureInRoom
};

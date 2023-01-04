import pool from "../configs/connectDb";

//Lấy danh sách vi phạm của 1 phòng
// SELECT * FROM violation INNER JOIN student ON violation.idSV = student.idSV WHERE violation.idKhu= '1' AND violation.idPhong= '1'

//lấy danh sách vi phạm của 1 sinh viên
//SELECT * FROM violation INNER JOIN student ON violation.idSV = student.idSV WHERE violation.idKhu= '1' AND violation.idPhong= '1' AND violation.idSV= '3'

let getListViolationInRoom = async (req, res) => {
  const { idKhu, idPhong } = req.params;

  const [rows] = await pool.execute(
    "SELECT * FROM vipham INNER JOIN sinhvien ON vipham.idSV = sinhvien.idSV WHERE vipham.idKhu= ? AND vipham.idPhong= ?",
    [idKhu, idPhong]
  );

  return res.status(200).json({
    data: rows,
  });
};

let addViolation = async (req, res) => {
  const { idKhu, idPhong, MSV, ContentViolent, Date_created, Level, Note } =
    req.body;

  const [rows] = await pool.execute("SELECT idSV FROM sinhvien WHERE MSV=?", [
    MSV,
  ]);

  if (rows.length > 0) {
    const idSV = rows[0].idSV;

    await pool.execute(
      "insert into vipham (idKhu, idPhong,idSV,NoiDungViPham,NgayViPham,MucDo,GhiChu) values (?,?,?,?,?,?,?)",
      [idKhu, idPhong, idSV, ContentViolent, Date_created, Level, Note]
    );

    const [datas] = await pool.execute(
      "SELECT * FROM vipham INNER JOIN sinhvien ON vipham.idSV = sinhvien.idSV WHERE vipham.idKhu= ? AND vipham.idPhong= ?",
      [idKhu, idPhong]
    );

    return res.status(200).json({
      data: datas,
    });
  }
};

let updateViolation = async (req, res) => {
  const {
    ContentViolent,
    Date_created,
    Level,
    Note,
    idSV,
    idViPham,
    idKhu,
    idPhong,
  } = req.body;

  await pool.execute(
    "UPDATE vipham SET NoiDungViPham=?,NgayViPham=?,MucDo=?,GhiChu=? WHERE idSV=? AND idViPham=?",
    [ContentViolent, Date_created, Level, Note, idSV, idViPham]
  );

  const [rows] = await pool.execute(
    "SELECT * FROM vipham INNER JOIN sinhvien ON vipham.idSV = sinhvien.idSV WHERE vipham.idKhu= ? AND vipham.idPhong= ?",
    [idKhu, idPhong]
  );

  return res.status(200).json({
    message: "Cập nhật vi phạm thành công",
    data: rows,
  });
};

let deleteViolation = async (req, res) => {
  const { idKhu, idPhong, idViPham } = req.body;

  await pool.execute("delete from vipham where idViPham = ?", [idViPham]);

  const [rows] = await pool.execute(
    "SELECT * FROM vipham INNER JOIN sinhvien ON vipham.idSV = sinhvien.idSV WHERE vipham.idKhu= ? AND vipham.idPhong= ?",
    [idKhu, idPhong]
  );

  return res.status(200).json({
    message: "Xóa vi phạm thành công",
    data: rows,
  });
};

let getListViolationOfStudent = async (req, res) => {
  const { idSV } = req.body;

  const [rows] = await pool.execute(
    "SELECT * FROM vipham INNER JOIN sinhvien ON vipham.idSV = sinhvien.idSV WHERE vipham.idSV=?",
    [idSV]
  );

  return res.status(200).json({
    data: rows,
  });
};

module.exports = {
  getListViolationInRoom,
  updateViolation,
  deleteViolation,
  addViolation,
  getListViolationOfStudent
};

import pool from "../configs/connectDb";

let checkExistInfoStudent = async (req, res) => {
  const [rows, fields] = await pool.execute(
    "SELECT IdSV FROM student WHERE id_TK= ?",
    [req.params.idUser]
  );

  if (rows.length > 0) {
    return res.status(200).json({
      message: "Tồn tại thông tin",
    });
  } else {
    return res.status(200).json({
      message: "Không tồn tại thông tin",
    });
  }
};

let getListStudentInRoom = async (req, res) => {
  const [rows, fields] = await pool.execute(
    "SELECT * FROM student INNER JOIN room ON student.idPhong = room.idPhong INNER JOIN area ON student.idKhu = area.idKhu WHERE student.idPhong= ? AND student.idKhu=?",
    [req.params.idRoom, req.params.idArea]
  );

  if (rows.length > 0) {
    return res.status(200).json({
      data: rows,
    });
  } else {
    return res.status(200).json({
      message: "Không tồn tại thông tin",
      data: [],
    });
  }
};

let updateStudent = async (req, res) => {
  let { FullName,MSV,Birthday,Sex,Ethnic,CCCD,Country,Major,Email,Class,Address,Name_Father,PhoneNumber_Father,Name_Mother,PhoneNumber_Mother,Email_Parent,PhoneNumber,idSV } = req.body;

  CCCD = Number(CCCD)

  await pool.execute(
    "UPDATE student SET HoTen=?,MSV=?,NgaySinh=?,GioiTinh=?,DanToc=?,CCCD=?,QueQuan=?,Khoa=?,Email=?,Lop=?,Dctt=?,HoTenBo=?,Sdt_Bo=?,HoTenMe=?,Sdt_Me=?,Email_Phuhuynh=?,Sdt=? WHERE idSV=?",
    [FullName,MSV,Birthday,Sex,Ethnic,CCCD,Country,Major,Email,Class,Address,Name_Father,PhoneNumber_Father,Name_Mother,PhoneNumber_Mother,Email_Parent,PhoneNumber,idSV]
  );

  const [[rows]] = await pool.execute("SELECT * FROM student WHERE idSV=?", [idSV]);

  return res.status(200).json({
    message: "Cập nhật thông tin thành công",
    data: rows
  });
};

module.exports = {
  checkExistInfoStudent,
  getListStudentInRoom,
  updateStudent
};

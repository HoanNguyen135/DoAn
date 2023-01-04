import pool from "../configs/connectDb";

let getDataProfile = async (req, res) => {
  const { id_TK } = req.body;
  const [rows] = await pool.execute(
    "SELECT * FROM taikhoan,hososinhvien WHERE taikhoan.Id=hososinhvien.id_TK AND hososinhvien.id_TK= ?",
    [id_TK]
  );
  if (rows) {
    return res.status(200).json({
      data: rows,
    });
  } else {
    return res.status(200).json({
      message: "Chưa tồn tại hồ sơ sinh viên",
      data: [],
    });
  }
};


let getListProfileStudent = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM taikhoan,hososinhvien WHERE taikhoan.Id=hososinhvien.id_TK",
  );
  if (rows) {
    return res.status(200).json({
      data: rows,
    });
  } else {
    return res.status(200).json({
      message: "Chưa tồn tại hồ sơ sinh viên",
      data: [],
    });
  }
};

let updateProfile = async (req, res) => {
  const {
    FullName,
    MSV,
    Birthday,
    Sex,
    Ethnic,
    CCCD,
    Country,
    Major,
    Email,
    Class,
    Address,
    Name_Father,
    PhoneNumber_Father,
    Name_Mother,
    PhoneNumber_Mother,
    Email_Parent,
    PhoneNumber,
    id_TK,
    Date_created,
  } = req.body;

  await pool.execute(
    "INSERT INTO `hososinhvien`(`HoTen`, `MSV`, `NgaySinh`, `GioiTinh`, `DanToc`, `CCCD`, `QueQuan`, `Khoa`, `Email`, `Lop`, `Dctt`, `HoTenBo`, `Sdt_Bo`, `HoTenMe`, `Sdt_Me`, `Email_Phuhuynh`, `Sdt`,`id_TK`,`NgayTaoHoSo`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      FullName,
      MSV,
      Birthday,
      Sex,
      Ethnic,
      CCCD,
      Country,
      Major,
      Email,
      Class,
      Address,
      Name_Father,
      PhoneNumber_Father,
      Name_Mother,
      PhoneNumber_Mother,
      Email_Parent,
      PhoneNumber,
      id_TK,
      Date_created,
    ]
  );

  const [[rows]] = await pool.execute(
    "SELECT * FROM taikhoan,hososinhvien WHERE taikhoan.Id=hososinhvien.id_TK AND hososinhvien.id_TK= ?",
    [id_TK]
  );

  return res.status(200).json({
    message: "Cập nhật hồ sơ thành công",
    data: rows,
  });
};

let updateAvatar = async (req, res) => {
  let { Avatar, idHSSV } = req.body;

  await pool.execute("UPDATE hososinhvien SET AnhDaiDien=? WHERE idHSSV=?", [
    Avatar,
    idHSSV,
  ]);

  const [[rows]] = await pool.execute(
    "SELECT AnhDaiDien FROM hososinhvien WHERE idHSSV=?",
    [idHSSV]
  );

  return res.status(200).json({
    message: "Cập nhật thông tin thành công",
    data: rows,
  });
};

module.exports = {
  getDataProfile,
  updateProfile,
  updateAvatar,
  getListProfileStudent
};

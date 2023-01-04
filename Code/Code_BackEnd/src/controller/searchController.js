import pool from "../configs/connectDb";

let searchData = async (req, res) => {
  const { textFind, table } = req.body;

  switch (table) {
    case "Vi phạm":
      const [rows] = await pool.execute(
        "SELECT * FROM vipham INNER JOIN sinhvien ON vipham.idSV = sinhvien.idSV WHERE sinhvien.HoTen like ? or sinhvien.MSV like ?",
        ["%" + textFind + "%", "%" + textFind + "%"]
      );
      return res.status(200).json({
        data: rows,
      });
    case "Đơn đăng ký":
      const [dataRegister] = await pool.execute(
        "SELECT * FROM application_dorm WHERE HoTen like ? or MSV like ?",
        ["%" + textFind + "%", "%" + textFind + "%"]
      );
      return res.status(200).json({
        data: dataRegister,
      });
    case "Sinh viên":
      const [dataStudent] = await pool.execute(
        "SELECT * FROM sinhvien INNER JOIN phong ON sinhvien.idPhong = phong.idPhong INNER JOIN khuvuc ON sinhvien.idKhu = khuvuc.idKhu WHERE HoTen like ? or MSV like ?",
        ["%" + textFind + "%", "%" + textFind + "%"]
      );
      return res.status(200).json({
        data: dataStudent,
      });
    case "Tài khoản":
      const [dataUser] = await pool.execute(
        "SELECT * FROM taikhoan WHERE TenTaiKhoan like ? or Email like ?",
        ["%" + textFind + "%", "%" + textFind + "%"]
      );
      return res.status(200).json({
        data: dataUser,
      });
    default:
      break;
  }

  //   const [rows] = await pool.execute("SELECT * FROM area");

  //   return res.status(200).json({
  //     data: rows,
  //   });
};

module.exports = {
  searchData,
};

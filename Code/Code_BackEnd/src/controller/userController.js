import pool from "../configs/connectDb";

let getListUser = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM taikhoan WHERE TrangThai=?", [
    "Hoạt động",
  ]);
  return res.status(200).json({
    data: rows,
  });
};

let getListUserPermission = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM taikhoan INNER JOIN khuvuc ON taikhoan.Quyen = khuvuc.idKhu WHERE TrangThai=? ",
    ["Hoạt động"]
  );
  return res.status(200).json({
    data: rows,
  });
};

let addUser = async (req, res) => {
  let { userName, position, email, status, date_created, password, note } =
    req.body;

  await pool.execute(
    "insert into taikhoan (TenTaiKhoan, ChucVu, Email,TrangThai,NgayTao,MatKhau,GhiChu) values (?,?,?,?,?,?,?)",
    [userName, position, email, status, date_created, password, note]
  );

  const [rows] = await pool.execute("SELECT * FROM taikhoan");

  return res.status(200).json({
    data: rows,
    message: "Tạo tài khoản thành công",
  });
};

let cancerUser = async (req, res) => {
  let { Id } = req.body;

  await pool.execute("update taikhoan set TrangThai=? WHERE Id=?", ["Đã hủy", Id]);

  const [rows] = await pool.execute("SELECT * FROM taikhoan WHERE TrangThai=?", [
    "Hoạt động",
  ]);
  return res.status(200).json({
    data: rows,
  });
};

let updateUser = async (req, res) => {
  let { Username, Position, Email, Date_created, Password, Note, Id } =
    req.body;

  await pool.execute(
    "update taikhoan set TenTaiKhoan=?, ChucVu=?, Email=?, NgayTao=?, MatKhau=?, GhiChu=? WHERE Id=?",
    [Username, Position, Email, Date_created, Password, Note, Id]
  );

  const [[rows]] = await pool.execute("SELECT * FROM taikhoan WHERE Id=?", [Id]);

  return res.status(200).json({
    message: "Cập nhật thành công",
    data: rows,
  });
};

let updateUserManage = async (req, res) => {
  let { Id, NameArea } = req.body;

  if (NameArea == "Hủy phân công khu vực") {
    await pool.execute("update taikhoan set Quyen=? WHERE Id=?", ["", Id]);
    const [rows] = await pool.execute(
      "SELECT * FROM taikhoan INNER JOIN khuvuc ON taikhoan.Quyen = khuvuc.idKhu WHERE TrangThai=? ",
      ["Hoạt động"]
    );
    return res.status(200).json({
      message: "Hủy phân công khu vực thành công",
      data: rows,
    });
  } else {
    const [[dataArea]] = await pool.execute(
      "SELECT * FROM khuvuc WHERE TenKhu=?",
      [NameArea]
    );

    await pool.execute("update taikhoan set Quyen=? WHERE Id=?", [
      dataArea.idKhu,
      Id,
    ]);

    const [rows] = await pool.execute(
      "SELECT * FROM taikhoan INNER JOIN khuvuc ON taikhoan.Quyen = khuvuc.idKhu WHERE TrangThai=? ",
      ["Hoạt động"]
    );
    return res.status(200).json({
      data: rows,
    });
  }
};

let addUserManage = async (req, res) => {
  let { Username, NameArea } = req.body;

  const [[dataArea]] = await pool.execute("SELECT * FROM khuvuc WHERE TenKhu=?", [
    NameArea,
  ]);

  await pool.execute("update taikhoan set Quyen=? WHERE TenTaiKhoan=?", [
    dataArea.idKhu,
    Username,
  ]);

  const [rows] = await pool.execute(
    "SELECT * FROM taikhoan INNER JOIN khuvuc ON taikhoan.Quyen = khuvuc.idKhu WHERE TrangThai=? ",
    ["Hoạt động"]
  );
  return res.status(200).json({
    data: rows,
  });
};

module.exports = {
  getListUser,
  updateUser,
  cancerUser,
  addUser,
  getListUserPermission,
  updateUserManage,
  addUserManage,
};

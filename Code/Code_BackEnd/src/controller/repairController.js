import pool from "../configs/connectDb";

let getListRepair = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM suachuas INNER JOIN phong ON phong.idPhong = suachuas.idPhong INNER JOIN khuvuc ON phong.idKhu = khuvuc.idKhu"
  );
  return res.status(200).json({
    data: rows,
  });
};

let getListRepairOfStudent = async (req, res) => {
  const { idPhong } = req.body;

  const [rows] = await pool.execute(
    "SELECT * FROM suachuas INNER JOIN phong ON phong.idPhong = suachuas.idPhong WHERE suachuas.idPhong =?",
    [idPhong]
  );
  return res.status(200).json({
    data: rows,
  });
};

let createRepair = async (req, res) => {
  let { NameRoom, ContentRepair, Status, Date_created, FullName, Describe } =
    req.body;

  const [[data]] = await pool.execute("Select * from phong WHERE TenPhong = ?", [
    NameRoom,
  ]);

  if (data) {
    await pool.execute(
      "insert into suachuas (idPhong, NoiDung, TrangThaiSuaChua,NgayTaoSuaChua,NguoiBaoSua,MoTaSuaChua) values (?,?,?,?,?,?)",
      [data.idPhong, ContentRepair, Status, Date_created, FullName, Describe]
    );

    const [rows] = await pool.execute("SELECT * FROM suachuas INNER JOIN phong ON phong.idPhong = suachuas.idPhong INNER JOIN khuvuc ON phong.idKhu = khuvuc.idKhu");

    return res.status(200).json({
      message: "Tạo sữa chữa thành công",
      data: rows,
    });
  } else {
    const [rows] = await pool.execute("SELECT * FROM suachuas INNER JOIN phong ON phong.idPhong = suachuas.idPhong INNER JOIN khuvuc ON phong.idKhu = khuvuc.idKhu");
    return res.status(200).json({
      message: "Tên phòng không tồn tại",
      data: rows,
    });
  }
};

let updateRepair = async (req, res) => {
  let { Describe, Status, Date_created, ContentRepair, FullName, idSuaChua } =
    req.body;

  await pool.execute(
    "update suachuas set MoTaSuaChua=?, TrangThaiSuaChua=?, NgayTaoSuaChua=?, NoiDung=? ,NguoiBaoSua=? WHERE idSuaChua=?",
    [Describe, Status, Date_created, ContentRepair, FullName, idSuaChua]
  );

  const [rows] = await pool.execute("SELECT * FROM suachuas INNER JOIN phong ON phong.idPhong = suachuas.idPhong INNER JOIN khuvuc ON phong.idKhu = khuvuc.idKhu");

  return res.status(200).json({
    message: "Cập nhật sửa chữa thành công",
    data: rows,
  });
};

let deleteRepair = async (req, res) => {
  const { idSuaChua } = req.body;

  await pool.execute("delete from suachuas where idSuaChua = ?", [idSuaChua]);

  const [rows] = await pool.execute("SELECT * FROM suachuas INNER JOIN phong ON phong.idPhong = suachuas.idPhong INNER JOIN khuvuc ON phong.idKhu = khuvuc.idKhu");

  return res.status(200).json({
    message: "Xóa sửa chữa thành công",
    data: rows,
  });
};

let createRepairOfStudent = async (req, res) => {
  const { FullName, idPhong, ContentRepair, Describe, Date_created } = req.body;

  await pool.execute(
    "insert into suachuas (idPhong, NoiDung, MoTaSuaChua,TrangThaiSuaChua,NgayTaoSuaChua,NguoiBaoSua) values (?,?,?,?,?,?)",
    [idPhong, ContentRepair, Describe, "Báo sửa chữa", Date_created, FullName]
  );

  const [rows] = await pool.execute("SELECT * FROM suachuas WHERE idPhong=?", [
    idPhong,
  ]);

  return res.status(200).json({
    message: "Báo sữa chữa thành công",
    data: rows,
  });
};

module.exports = {
  getListRepair,
  createRepair,
  getListRepairOfStudent,
  createRepairOfStudent,
  updateRepair,
  deleteRepair,
};

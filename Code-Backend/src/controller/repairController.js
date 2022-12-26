import pool from "../configs/connectDb";

let getListRepair = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM suachuas INNER JOIN room ON room.idPhong = suachuas.idPhong"
  );
  return res.status(200).json({
    data: rows,
  });
};

let createRepair = async (req, res) => {
  let { NameRoom, ContentRepair, Status, Date_created } = req.body;

  const [[data]] = await pool.execute("Select * from room WHERE TenPhong = ?", [
    NameRoom,
  ]);


  if (data) {
    await pool.execute(
      "insert into suachuas (idPhong, NoiDung, TrangThaiSuaChua,NgayTaoSuaChua) values (?,?,?,?)",
      [data.idPhong, ContentRepair, Status, Date_created]
    );

    const [rows] = await pool.execute("SELECT * FROM suachuas");

    return res.status(200).json({
      message: "Tạo sữa chữa thành công",
      data: rows,
    });
  }
};

module.exports = {
  getListRepair,
  createRepair,
};

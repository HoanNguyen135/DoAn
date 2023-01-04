import pool from "../configs/connectDb";

let getListElectricAndWater = async (req, res) => {
  const { current_page, idKhu } = req.body;

  const trang = current_page;

  const [rooms] = await pool.execute("SELECT * FROM phong WHERE idKhu=?", [
    idKhu,
  ]);

  if (rooms.length > 0) {
    const start = (trang - 1) * rooms.length;

    const [dataOfPage] = await pool.query(
      "SELECT * FROM diennuoc INNER JOIN phong ON diennuoc.idPhong = phong.idPhong JOIN giadiennuoc ON diennuoc.idGiaDienNuoc = giadiennuoc.idGiaDienNuoc WHERE phong.idKhu= ? ORDER BY diennuoc.NgayTaoDon DESC LIMIT ?, ? ",
      [idKhu, start, rooms.length]
    );
    return res.status(200).json({
      data: dataOfPage,
    });
  }
};

let getPrice = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM giadiennuoc");

  return res.status(200).json({
    data: rows,
  });
};

let updatePrice = async (req, res) => {
  const { PriceElectric, PriceWater, Date_created, Date_update } = req.body;

  await pool.execute(
    "UPDATE giadiennuoc SET giaDien=?,giaNuoc=?,NgayTaoGiaDienNuoc=?,NgaySua=?",
    [PriceElectric, PriceWater, Date_created, Date_update]
  );

  const [rows] = await pool.execute("SELECT * FROM giadiennuoc");

  return res.status(200).json({
    data: rows,
  });
};

let getNumberPage = async (req, res) => {
  const { idKhu } = req.body;
  const [rooms] = await pool.execute("SELECT * FROM phong WHERE idKhu=?", [
    idKhu,
  ]);

  if (rooms.length > 0) {
    const [rows] = await pool.execute(
      "SELECT * FROM diennuoc INNER JOIN phong ON diennuoc.idPhong = phong.idPhong WHERE phong.idKhu=?",
      [idKhu]
    );
    const length = rows.length / rooms.length;

    var arr = [];
    for (var i = 1; i <= Math.ceil(length); i++) {
      arr.push(`${i}`);
    }
    return res.status(200).json({
      data: arr,
    });
  }
};

let deleteElectricAndWater = async (req, res) => {
  const { idDienNuoc, idKhu } = req.body;

  await pool.execute("delete from diennuoc where idDienNuoc = ?", [idDienNuoc]);

  const [dataDienNuoc] = await pool.query(
    "SELECT * FROM diennuoc INNER JOIN phong ON diennuoc.idPhong = phong.idPhong WHERE idKhu=?",
    [idKhu]
  );

  return res.status(200).json({
    message: "xóa tiền điện nước thành công",
    data: dataDienNuoc,
  });
};

let updateElectricAndWater = async (req, res) => {
  const {
    Date_created,
    OldNumberElectric,
    NewNumberElectric,
    OldNumberWater,
    NewNumberWater,
    Status,
    idDienNuoc,
    idKhu,
  } = req.body;

  await pool.execute(
    "UPDATE diennuoc SET NgayTaoDon=?, SoDienTruoc =?,SoDienSau=?, SoNuocTruoc =?,SoNuocSau=?,TrangThaiDienNuoc=? where idDienNuoc = ?",
    [
      Date_created,
      OldNumberElectric,
      NewNumberElectric,
      OldNumberWater,
      NewNumberWater,
      Status,
      idDienNuoc,
    ]
  );

  const [dataDienNuoc] = await pool.query(
    "SELECT * FROM diennuoc INNER JOIN phong ON diennuoc.idPhong = phong.idPhong WHERE phong.idKhu=?",
    [idKhu]
  );

  return res.status(200).json({
    message: "Cập nhật tiền điện thành công",
    data: dataDienNuoc,
  });
};

let addElectricAndWater = async (req, res) => {
  const {
    Date_created,
    Rooms,
    NewNumberElectric,
    NewNumberWater,
    Status,
    idKhu,
  } = req.body;

  const [rows, fields] = await pool.execute(
    "SELECT * FROM phong WHERE TenPhong=? AND idKhu=?",
    [Rooms, idKhu]
  );

  const dataRoom = rows[0];

  if (rows.length > 0) {
    const [[dataNumberElectric]] = await pool.execute(
      "SELECT * FROM `diennuoc` WHERE diennuoc.idPhong =? AND diennuoc.NgayTaoDon < ? ORDER BY NgayTaoDon DESC LIMIT 0,1",
      [dataRoom.idPhong, Date_created]
    );

    if (dataNumberElectric) {
      await pool.query(
        "INSERT INTO diennuoc(idPhong,SoDienTruoc,SoDienSau,SoNuocTruoc,SoNuocSau,TrangThaiDienNuoc,idGiaDienNuoc,NgayTaoDon) VALUES(?,?,?,?,?,?,?,?)",
        [
          dataRoom.idPhong,
          dataNumberElectric.SoDienSau,
          NewNumberElectric,
          dataNumberElectric.SoNuocSau,
          NewNumberWater,
          Status,
          1,
          Date_created,
        ]
      );

      const [dataDienNuoc] = await pool.query("SELECT * FROM diennuoc");

      return res.status(200).json({
        message: "Thêm tiền điện nước thành công",
        data: dataDienNuoc,
      });
    } else {
      await pool.query(
        "INSERT INTO diennuoc(idPhong,SoDienTruoc,SoDienSau,SoNuocTruoc,SoNuocSau,TrangThaiDienNuoc,idGiaDienNuoc,NgayTao) VALUES(?,?,?,?,?,?,?,?)",
        [
          rows.idPhong,
          0,
          NewNumberElectric,
          0,
          NewNumberWater,
          Status,
          1,
          Date_created,
        ]
      );

      const [dataDienNuoc] = await pool.query(
        "SELECT * FROM diennuoc INNER JOIN phong ON diennuoc.idPhong = phong.idPhong WHERE idKhu=?",
        [idKhu]
      );

      return res.status(200).json({
        message: "Thêm tiền điện nước thành công",
        data: dataDienNuoc,
      });
    }
  }
};

module.exports = {
  getNumberPage,
  getListElectricAndWater,
  addElectricAndWater,
  deleteElectricAndWater,
  updateElectricAndWater,
  getPrice,
  updatePrice
};

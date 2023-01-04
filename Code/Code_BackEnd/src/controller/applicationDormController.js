import pool from "../configs/connectDb";
import mysql from "mysql2/promise";
import Q from "q";
var deferred = Q.defer();

let getListApplicationDorm = async (req, res) => {
  const current_page = req.params.current_page;
  const trang = current_page.substring(current_page.indexOf(" ") + 1);
  const start = (trang - 1) * 12;

  const [dataOfPage] = await pool.execute(
    "SELECT * FROM dondangky WHERE TrangThai = 'Chờ duyệt' LIMIT ?, 12",
    [start]
  );
  return res.status(200).json({
    data: dataOfPage,
  });
};

let getNumberPage = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM dondangky WHERE TrangThai = 'Chờ duyệt'"
  );
  const length = rows.length / 12;
  var arr = [];
  for (var i = 1; i <= Math.ceil(length); i++) {
    arr.push(`Trang ${i}`);
  }
  return res.status(200).json({
    data: arr,
  });
};

let updateStatusApplication = async (req, res) => {
  const { Status, idDonDK } = req.body;

  if (Status == "Đã duyệt") {
    await pool.execute(
      "update dondangky set TrangThai=?  WHERE idDonDK=?",
      [Status, idDonDK]
    );

    const [rows] = await pool.execute(
      "SELECT * FROM dondangky WHERE TrangThai = 'Đã duyệt'"
    );
    return res.status(200).json({
      message: "Duyệt đơn thành công",
      data: rows,
    });
  } else {
    await pool.execute(
      "update dondangky set TrangThai=?  WHERE idDonDK=?",
      [Status, idDonDK]
    );

    const [rows] = await pool.execute(
      "SELECT * FROM dondangky WHERE TrangThai = 'Từ chối'"
    );
    return res.status(200).json({
      message: "Đã từ chối đơn",
      data: rows,
    });
  }
};

let getDataRegisterInDorm = async (req, res) => {
  const { Id } = req.body;
  const [rows] = await pool.execute(
    "SELECT * FROM taikhoan,dondangky WHERE taikhoan.Id=dondangky.id_TK AND dondangky.id_TK= ?",
    [Id]
  );
  if (rows) {
    return res.status(200).json({
      data: rows,
    });
  } else {
    return res.status(200).json({
      message: "Chưa tồn tại đơn đăng ký",
      data: [],
    });
  }
};

let registerInDorm = async (req, res) => {
  const {
    Id,
    FullName,
    MSV,
    Birthday,
    Sex,
    Class,
    CCCD,
    Address,
    Entity,
    PhoneNumber,
    NumberPhone_Parent,
    Date_created,
  } = req.body;

  await pool.execute(
    "INSERT INTO `dondangky`(`id_TK`, `HoTen`, `MSV`, `NgaySinh`, `GioiTinh`, `Lop`, `CCCD`, `Dctt`, `DoiTuong`, `Sdt`, `Sdt_Phuhuynh`, `NgayTaoDon`, `TrangThai`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      Id,
      FullName,
      MSV,
      Birthday,
      Sex,
      Class,
      CCCD,
      Address,
      Entity,
      PhoneNumber,
      NumberPhone_Parent,
      Date_created,
      "Chờ duyệt",
    ]
  );

  const [[rows]] = await pool.execute(
    "SELECT * FROM taikhoan,dondangky WHERE taikhoan.Id=dondangky.id_TK AND dondangky.id_TK= ?",
    [Id]
  );

  return res.status(200).json({
    message: "Đăng ký đơn thành công",
    data: rows,
  });
};

let filterApplicationInDorm = async (req, res) => {
  const { data } = req.body;
  const [dataApplicationDorm] = await pool.query(
    "SELECT * FROM dondangky WHERE TrangThai= ?",
    ["Chờ duyệt"]
  );

  const dataFilter = [];
  await dataApplicationDorm.map((item) => {
    let checkHasElement = 0;
    for (let i = 0; i < data.length; i++) {
      if (item.DoiTuong.includes(data[i])) {
        checkHasElement++;
      }
    }
    if (checkHasElement == data.length) {
      dataFilter.push(item);
    }
  });

  if (dataFilter) {
    return res.status(200).json({
      data: dataFilter,
    });
  } else {
    return res.status(200).json({
      data: [],
    });
  }
};

let acceptAllApplication = async (req, res) => {
  const { dataAccept, type } = req.body;
  var queries = "";

  await dataAccept.forEach(function (item) {
    queries += mysql.format(
      "UPDATE dondangky SET TrangThai = ? WHERE idDonDK = ?; ",
      [type, item.idDonDK]
    );
  });
  await pool.query(queries);

  const [rows] = await pool.execute(
    "SELECT * FROM dondangky WHERE TrangThai = 'Chưa duyệt'"
  );

  if (type == "Đã duyệt") {
    return res.status(200).json({
      message: "Đã duyệt danh sách đơn thành công",
      data: rows,
    });
  } else {
    return res.status(200).json({
      message: "Đã từ chối danh sách đơn thành công",
      data: rows,
    });
  }
};

module.exports = {
  getListApplicationDorm,
  getNumberPage,
  updateStatusApplication,
  getDataRegisterInDorm,
  registerInDorm,
  filterApplicationInDorm,
  acceptAllApplication,
};

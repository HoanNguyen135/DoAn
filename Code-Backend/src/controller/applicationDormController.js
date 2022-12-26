import pool from "../configs/connectDb";

let getListApplicationDorm = async (req, res) => {
  const current_page = req.params.current_page;
  const trang = current_page.substring(current_page.indexOf(" ") + 1);
  const start = (trang - 1) * 12;

  const [dataOfPage] = await pool.execute(
    "SELECT * FROM application_dorm WHERE TrangThai = 'Chờ duyệt' LIMIT ?, 12",
    [start]
  );
  return res.status(200).json({
    data: dataOfPage,
  });
};

let getNumberPage = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM application_dorm WHERE TrangThai = 'Chờ duyệt'"
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
      "update application_dorm set TrangThai=?  WHERE idDonDK=?",
      [Status, idDonDK]
    );

    const [rows] = await pool.execute(
      "SELECT * FROM application_dorm WHERE TrangThai = 'Đã duyệt'"
    );
    return res.status(200).json({
      message: "Duyệt đơn thành công",
      data: rows,
    });
  } else {
    await pool.execute(
      "update application_dorm set TrangThai=?  WHERE idDonDK=?",
      [Status, idDonDK]
    );

    const [rows] = await pool.execute(
      "SELECT * FROM application_dorm WHERE TrangThai = 'Từ chối'"
    );
    return res.status(200).json({
      message: "Đã từ chối đơn",
      data: rows,
    });
  }
};

module.exports = {
  getListApplicationDorm,
  getNumberPage,
  updateStatusApplication,
};

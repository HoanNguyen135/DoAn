import pool from "../configs/connectDb";

let getListUser = async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM users");
  return res.status(200).json({
    data: rows,
  });
};

let updateUser = async (req, res) => {
  let { Username, Position, Email, Date_created, Password, Note,Id } = req.body;

  await pool.execute(
    "update users set Username=?, Position=?, Email=?, Date_created=?, Password=?, Note=? WHERE Id=?",
    [Username, Position, Email, Date_created, Password, Note,Id]
  );

  const [[rows]] = await pool.execute("SELECT * FROM users WHERE Id=?",[Id]);

  return res.status(200).json({
    message: "Cập nhật thành công",
    data: rows
  });
};

module.exports = {
  getListUser,
  updateUser,
};

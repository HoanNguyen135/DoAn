import pool from "../configs/connectDb";

let getAllUser = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `user`");

  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

// let createUser = async (req, res) => {
//   let { firstName, lastName, email, address } = req.body;

//   if (!firstName || !lastName || !email || !address) {
//     return res.status(200).json({
//       message: "null",
//     });
//   }

//   await pool.execute(
//     "insert into user (firstName, lastName, email, address) values (?, ?, ?, ?)",
//     [firstName, lastName, email, address]
//   );

//   return res.status(200).json({
//     message: "ok",
//   });
// };

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;

  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json({
      message: "null",
    });
  }

  await pool.execute(
    "update user set firstName= ?, lastName = ? , email = ? , address= ? where id = ?",
    [firstName, lastName, email, address, id]
  );

  return res.status(200).json({
    message: "ok",
  });
};

let deleteUser = async (req, res) => {
  let id = req.params.userId;

  if (!id) {
    return res.status(200).json({
      message: "null",
    });
  }
  await pool.execute("delete from user where id = ?", [id]);
  return res.status(200).json({
    message: "ok",
  });
};

let createJob = async (req, res) => {
  let { nameJob, timeStart, timeEnd, date } = req.body;

  if (!nameJob || !timeStart || !timeEnd || !date) {
    return res.status(200).json({
      message: "null",
    });
  }

  await pool.execute(
    "insert into job (nameJob, timeStart, timeEnd,date) values (?, ?, ?,?)",
    [nameJob, timeStart, timeEnd, date]
  );

  return res.status(200).json({
    message: "ok",
  });
};

let getAllJob = async (req, res) => {
  const date = req.params.date;
  const [rows, fields] = await pool.execute(
    "SELECT * FROM `job` WHERE date=?",
    [date]
  );

  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createUser = async (req, res) => {
  let { userName, position, email, status, date_created, password, note } =
    req.body;

  await pool.execute(
    "insert into users (Username, Position, Email,Status,Date_created,Password,Note) values (?,?,?,?,?,?,?)",
    [userName, position, email, status, date_created, password, note]
  );

  return res.status(200).json({
    message: "Tạo tài khoản thành công",
  });
};

let loginUser = async (req, res) => {
  let { userName, passWord } = req.params;

  const [response] = await pool.execute(
    "select * from users where Username=? and Password = ? and Status = ?",
    [userName, passWord, "Hoạt động"]
  );

  if (response.length>0) {
    return res.status(200).json({
      message: "Đăng nhập thành công",
      data: response
    });
  } else {
    return res.status(200).json({
      message: "Tài khoản hoặc mật khẩu không chính xác",
    });
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  createJob,
  getAllJob,
  loginUser,
};

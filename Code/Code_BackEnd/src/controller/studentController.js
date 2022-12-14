import pool from "../configs/connectDb";

let AddStudentInRoom = async (req, res) => {
  const { MSV, idRoom, idArea } = req.body;

  const [rows, fields] = await pool.execute(
    "SELECT * FROM hososinhvien WHERE MSV =?",
    [ MSV]
  );

  if (rows.length > 0) {
    await pool.query(
      "INSERT INTO sinhvien (HoTen, MSV, NgaySinh, Sdt, GioiTinh, DanToc, CCCD, QueQuan, Khoa, Email, Lop, Dctt, HoTenBo, Sdt_Bo, HoTenMe, Sdt_Me, Email_Phuhuynh, id_TK, idPhong, idKhu, AnhDaiDien) VALUES ?",
      [
        rows.map((item) => [
          item.HoTen,
          item.MSV,
          item.NgaySinh,
          item.Sdt,
          item.GioiTinh,
          item.DanToc,
          item.CCCD,
          item.QueQuan,
          item.Khoa,
          item.Email,
          item.Lop,
          item.Dctt,
          item.HoTenBo,
          item.Sdt_Bo,
          item.HoTenMe,
          item.Sdt_Me,
          item.Email_Phuhuynh,
          item.id_TK,
          idRoom,
          idArea,
          item.AnhDaiDien,
        ]),
      ]
    );

    await pool.query("UPDATE phong SET SoNguoi= phong.SoNguoi +1 WHERE idPhong = ?",[idRoom])

    const [dataListStudent] = await pool.execute(
      "SELECT * FROM sinhvien INNER JOIN phong ON sinhvien.idPhong = phong.idPhong INNER JOIN khuvuc ON sinhvien.idKhu = khuvuc.idKhu WHERE sinhvien.idPhong= ? AND sinhvien.idKhu=?",
      [idRoom, idArea]
    );

    if (dataListStudent.length > 0) {
      return res.status(200).json({
        message: "thêm thành công",
        data: dataListStudent,
      });
    }
  } else {
    return res.status(200).json({
      message: "Thông tin không tông tại",
      data: [],
    });
  }

  // if (rows.length > 0) {

  //   const [rows] = await pool.execute(
  //     "SELECT * FROM hososinhvien WHERE MSV= ? AND Email=?",
  //     [MSV,Email]
  //   );

  //   return res.status(200).json({
  //     message: "Tồn tại thông tin",
  //   });
  // } else {
  //   return res.status(200).json({
  //     message: "Không tồn tại thông tin",
  //     data : []
  //   });
  // }
};

let addStudentInRoomFromFile = async (req, res) => {

  const rows = await req.body.data;

  const [dataUser] = await pool.execute("SELECT * FROM taikhoan");
  if (dataUser.length > 0) {
    rows.map((items) => {
      dataUser.filter((item) => {
        if (items.id_TK == item.TenTaiKhoan) {
          items.id_TK = item.Id;
        }
      });
      return {
        ...items,
      };
    });
  }


  const [dataRoomAndArea] = await pool.execute("SELECT * FROM khuvuc INNER JOIN phong ON phong.idKhu = khuvuc.idKhu ");
  if (dataRoomAndArea.length > 0) {
    rows.map((items) => {
      dataRoomAndArea.filter((item) => {
        if (items.idPhong == item.TenPhong) {
          items.idPhong = item.idPhong;
        }
        if (items.idKhu == item.TenKhu) {
          items.idKhu = item.idKhu;
        }
      });
      return {
        ...items,
      };
    });
  }

  await pool.query(
    "INSERT INTO sinhvien (HoTen, MSV, NgaySinh, Sdt, GioiTinh, DanToc, CCCD, QueQuan, Khoa, Email, Lop, Dctt, HoTenBo, Sdt_Bo, HoTenMe, Sdt_Me, Email_Phuhuynh, id_TK, idPhong, idKhu) VALUES ?",
    [
      rows.map((item) => [
        item.HoTen,
        item.MSV,
        item.NgaySinh,
        item.Sdt,
        item.GioiTinh,
        item.DanToc,
        item.CCCD,
        item.QueQuan,
        item.Khoa,
        item.Email,
        item.Lop,
        item.Dctt,
        item.HoTenBo,
        item.Sdt_Bo,
        item.HoTenMe,
        item.Sdt_Me,
        item.Email_Phuhuynh,
        item.id_TK,
        item.idPhong,
        item.idKhu,
      ]),
    ]
  );


  await pool.query("UPDATE phong SET SoNguoi= phong.SoNguoi +?  WHERE idPhong = ?",[rows.length,rows[0].idPhong])

  const [dataListStudent] = await pool.execute(
    "SELECT * FROM sinhvien INNER JOIN phong ON sinhvien.idPhong = phong.idPhong INNER JOIN khuvuc ON sinhvien.idKhu = khuvuc.idKhu WHERE sinhvien.idPhong= ? AND sinhvien.idKhu=?",
    [rows[0].idPhong, rows[0].idKhu]
  );

  return res.status(200).json({
    message: "Thêm danh sách sinh viên thành công vào phòng",
    data : dataListStudent
  });
};

let removeStudentInRoom = async (req, res) => {
  const [[dataPhong]] = await pool.execute("SELECT idPhong FROM sinhvien WHERE idSV = ?", [req.params.idSV]);

  await pool.query("UPDATE phong SET SoNguoi= phong.SoNguoi -1 WHERE idPhong = ?",[dataPhong.idPhong])

  await pool.execute("DELETE FROM sinhvien WHERE idSV = ?", [req.params.idSV]);

  const [rows] = await pool.execute("SELECT * FROM sinhvien INNER JOIN phong ON sinhvien.idPhong = phong.idPhong INNER JOIN khuvuc ON sinhvien.idKhu = khuvuc.idKhu WHERE sinhvien.idPhong= ?",[dataPhong.idPhong]);

  return res.status(200).json({
    message: "Xóa sinh viên khỏi phòng thành công",
    data: rows,
  });
};

let getListStudentInRoom = async (req, res) => {
  const [rows, fields] = await pool.execute(
    "SELECT * FROM sinhvien INNER JOIN phong ON sinhvien.idPhong = phong.idPhong INNER JOIN khuvuc ON sinhvien.idKhu = khuvuc.idKhu WHERE sinhvien.idPhong= ? AND sinhvien.idKhu=?",
    [req.params.idRoom, req.params.idArea]
  );

  if (rows.length > 0) {
    return res.status(200).json({
      data: rows,
    });
  } else {
    return res.status(200).json({
      message: "Không tồn tại thông tin",
      data: [],
    });
  }
};

let updateStudent = async (req, res) => {
  let {
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
    idSV,
  } = req.body;

  CCCD = Number(CCCD);

  await pool.execute(
    "UPDATE sinhvien SET HoTen=?,MSV=?,NgaySinh=?,GioiTinh=?,DanToc=?,CCCD=?,QueQuan=?,Khoa=?,Email=?,Lop=?,Dctt=?,HoTenBo=?,Sdt_Bo=?,HoTenMe=?,Sdt_Me=?,Email_Phuhuynh=?,Sdt=? WHERE idSV=?",
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
      idSV,
    ]
  );

  const [[rows]] = await pool.execute("SELECT * FROM sinhvien WHERE idSV=?", [
    idSV,
  ]);

  return res.status(200).json({
    message: "Cập nhật thông tin thành công",
    data: rows,
  });
};

let updateAvatar = async (req, res) => {
  let { Avatar, idSV } = req.body;

  await pool.execute("UPDATE sinhvien SET AnhDaiDien=? WHERE idSV=?", [
    Avatar,
    idSV,
  ]);

  const [[rows]] = await pool.execute(
    "SELECT AnhDaiDien FROM sinhvien WHERE idSV=?",
    [idSV]
  );

  return res.status(200).json({
    message: "Cập nhật thông tin thành công",
    data: rows,
  });
};

module.exports = {
  AddStudentInRoom,
  getListStudentInRoom,
  updateStudent,
  updateAvatar,
  removeStudentInRoom,
  addStudentInRoomFromFile,
};

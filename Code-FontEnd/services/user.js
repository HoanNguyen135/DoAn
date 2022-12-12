import { api } from ".";

const UserService = {
  createAccount({
    userName,
    position = "Sinh viên",
    email,
    status = "Hoạt động",
    date_created,
    password,
    note = "",
  } = {}) {
    return api.call().post("/create-new-user", {
      userName,
      position,
      email,
      status,
      date_created,
      password,
      note,
    });
  },

  login({ userName, passWord } = {}) {
    return api.call().get(`/login/${userName}/${passWord}`, {
      params: {
        userName,
        passWord,
      },
    });
  },

  getListUser() {
    return api.call().get(`/getListUser`);
  },

  updateUser({ Username, Position, Email, Date_created, Password, Note,Id } = {}) {
    return api.call().put("/update-user", {
      Username,
      Position,
      Email,
      Date_created,
      Password,
      Note,
      Id
    });
  },
};

export default UserService;

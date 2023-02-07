import axios from "axios";

const serverUrl = "http://localhost:8001/api";

export const loginAPI = ({ email, password }) => {
  axios
    .post(`${serverUrl}/users/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      // Handle success.
      console.log(response);
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
      alert("아이디 또는 비밀번호를 확인해주세요");
    });
};

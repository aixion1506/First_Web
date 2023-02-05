import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models";

class UserService {
  // eslint-disable-next-line no-shadow
  constructor(userModel) {
    this.userModel = userModel;
  }

  async addUser(userInfo) {
    const { email, name, password } = userInfo;

    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error("이미 사용중인 이메일 입니다.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo = { name, email, password: hashedPassword };
    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;
  }

  async getUserToken(loginInfo) {
    const { email, password } = loginInfo;

    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error("이메일이 일치하지 않습니다.");
    }

    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error("패스워드가 일치하지 않습니다.");
    }

    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    // eslint-disable-next-line no-underscore-dangle

    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ userId: user._id, pe: user.isAdmin }, secretKey, {
      expiresIn: "1h",
    });
    const isAdmin = user.isAdmin === true;

    return { token, isAdmin };
  }

  async getUserDetail(userId) {
    const user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    }
    return user;
  }

  async deleteUser(userId) {
    const user = await this.userModel.deleteById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
    }
    return user;
  }

  async getUsers() {
    const users = await this.userModel.findAll();
    return users;
  }

  // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능함.
  async setUser(userId, { name, email, role }) {
    // 해당 id의 유저 존재 유무 확인
    let user = await this.userModel.findById(userId);

    // 해당 유저가 존재하지않으면, 에러 메시지 반환
    if (!user) {
      throw new Error("가입 내역이 없습니다.");
    }

    // 비밀번호 일치 여부 확인 추가 필요
    // 비밀번호도 변경하는 경우에는 해쉬화 해주어야 함.

    // 정보 수정

    // 업데이트 진행
    user = await this.userModel.update({
      userId,
      update: { name, email, role },
    });

    return user;
  }
}

const userService = new UserService(userModel);

export { userService };

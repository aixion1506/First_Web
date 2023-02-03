import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/schemas/userModel";

class UserService {
  // eslint-disable-next-line no-shadow
  constructor(userModel) {
    this.userModel = userModel;
  }

  async addUser(userInfo) {
    const { email, name, password } = userInfo;

    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error("this email is already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserInfo = { name, email, password: hashedPassword };
    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;
  }

  async getUserToken(loginInfo) {
    // 객체 destructuring
    const { email, password } = loginInfo;

    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error("no email");
    }

    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error("password does not match");
    }

    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);

    const isAdmin = user.role === "admin";

    return { token, isAdmin };
  }
}

const userService = new UserService(userModel);

export { userService };

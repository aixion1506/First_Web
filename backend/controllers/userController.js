// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import is from "@sindresorhus/is";
import { userService } from "../services";

class UserController {
  async register(req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요",
        );
      }
      const { name, email, password } = req.body;
      const newUser = await userService.addUser({
        name,
        email,
        password,
      });
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요",
        );
      }
      const { email, password } = req.body;
      const result = await userService.getUserToken({ email, password });

      res.status(200).json(result);
      console.log("토큰생성", result);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    res.clearCookie("user").end();
  }

  async getUser(req, res, next) {
    try {
      // 토큰에 저장된 id
      const id = req.userId;
      const currentUserInfo = await userService.getUserDetail(id);
      res.status(200).json(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { userId } = req.params;
      const deleteUser = await userService.deleteUser(userId);
      res.status(200).json(deleteUser);
    } catch (error) {
      next(error);
    }
  }

  async editUser(req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요",
        );
      }

      const { userId } = req.params;
      const {
        name,
        password,
        currentPassword,
        address1,
        address2,
        zipCode,
        city,
        phoneNumber,
      } = req.body;
      const userInfo = { userId, currentPassword };
      const editUserInfo = await userService.setUser(userInfo, {
        name,
        password,
        address1,
        address2,
        zipCode,
        city,
        phoneNumber,
      });

      res.status(200).json(editUserInfo);
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };

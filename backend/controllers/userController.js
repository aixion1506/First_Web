import { userService } from "../services";

class UserController {
  async getUser(req, res, next) {
    try {
      const { id } = req.params;
      const currentUserInfo = await userService.getUserDetail(id);
      res.status(200).json(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;

      const deleteUser = await userService.deleteUser(id);
      res.status(200).json(deleteUser);
    } catch (error) {
      next(error);
    }
  }

  async editUser(req, res, next) {
    try {
      // params로부터 id를 가져옴
      const { id } = req.params;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const { name, email } = req.body;
      // 사용자 정보를 업데이트함.
      const editUserInfo = await userService.setUser(id, { name, email });

      res.status(200).json(editUserInfo);
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };

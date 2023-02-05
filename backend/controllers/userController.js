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
      const { id } = req.params;
      const { name, email, role } = req.body;
      const editUserInfo = await userService.setUser(id, { name, email, role });

      res.status(200).json(editUserInfo);
    } catch (error) {
      next(error);
    }
  }
}

const userController = new UserController();

export { userController };

import { Router } from "express";
// eslint-disable-next-line import/no-unresolved , node/no-missing-import
import is from "@sindresorhus/is";
import { userService } from "../services";
import { userController } from "../controllers";
import { isAdmin } from "../middleware";

const adminRouter = Router();

// 전체 사용자 목록을 얻음
adminRouter.get("/admin/userlist", isAdmin, async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

export default adminRouter;

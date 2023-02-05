import { Router } from "express";
// eslint-disable-next-line import/no-unresolved , node/no-missing-import
import { userController } from "../controllers";
import { loginRequired } from "../middleware";

const userRouter = Router();
// 회원가입
userRouter.post("/register", userController.register);

// 로그인
userRouter.post("/login", userController.login);

// 로그아웃
userRouter.post("/logout", loginRequired, userController.logout);

// 유저 페이지
userRouter.get("/account/", loginRequired, userController.getUser);

// 회원정보수정
userRouter.patch("/details/:userId", loginRequired, userController.editUser);

// 회원탈퇴
userRouter.delete("/signout/:id", loginRequired, userController.deleteUser);

export default userRouter;

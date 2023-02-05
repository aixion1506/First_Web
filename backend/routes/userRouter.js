import { Router } from "express";
// eslint-disable-next-line import/no-unresolved , node/no-missing-import
import is from "@sindresorhus/is";
import { userService } from "../services";
import { userController } from "../controllers";
import { loginRequired, isAdmin } from "../middleware";

const userRouter = Router();

// 회원가입

userRouter.post("/register", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요",
      );
    }
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    const newUser = await userService.addUser({
      name,
      email,
      password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// 로그인
userRouter.post("/login", async (req, res, next) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    console.log(password);

    const result = await userService.getUserToken({ email, password });

    res.status(200).json(result);
    console.log("토큰생성", result);
  } catch (error) {
    next(error);
  }
});

// 로그아웃
userRouter.post("/logout", async (req, res) => {
  res.clearCookie("user").end();
});

// 유저 페이지
userRouter.get("/account/:id", loginRequired, userController.getUser);

// 회원정보수정
userRouter.patch("/details/:id", userController.editUser);

// 회원탈퇴
userRouter.delete("/signout/:id", userController.deleteUser);

export default userRouter;

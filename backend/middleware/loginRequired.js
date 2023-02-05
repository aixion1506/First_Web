import jwt from "jsonwebtoken";

// Authorization 헤더의 bearer schema
const loginRequired = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    res.status(403).json({
      error: "로그인이 필요합니다.",
      data: null,
    });
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const token = req.headers.authorization.slice(7);
    if (!token || token === "null") {
      console.log(
        "서비스 사용 요청이 있습니다.하지만, Authorization 토큰: 없음",
      );

      res.status(401).json({
        result: "forbidden-approach",
        reason: "로그인한 유저만 사용할 수 있는 서비스입니다.",
      });
      return;
    }
    const userInfo = jwt.verify(token, secretKey);
    res.locals.user = userInfo;
    next();
  } catch (error) {
    res.status(401).json({
      result: "forbidden-approach",
      reason: "정상적인 토큰이 아닙니다.",
    });
  }
};

export default loginRequired;

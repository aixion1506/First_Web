import logger from "./logger";

function errorLogger(err, req, res, next) {
  logger.error("에러 로그", { message: err });
  next(err);
}

export default errorLogger;

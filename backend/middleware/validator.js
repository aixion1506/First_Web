import { validationResult } from "express-validator";

const validatorErrorChecker = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation fail, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }
  next();
};

export default validatorErrorChecker;

import { addCategoryService } from "../services/categoryService";

export const addCategory = async (req, res, next) => {
  try {
    const { title } = req.body;
    // const { title, description, theme, imageKey } = req.body;

    const newCategory = await addCategoryService({
      title,
      // description,
      // theme,
      // imageKey,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

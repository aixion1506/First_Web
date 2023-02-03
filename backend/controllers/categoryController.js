import { categoryService } from "../services";

class CategoryController {
  async addCategory(req, res, next) {
    try {
      const { title } = req.body;
      const newCategory = await categoryService.addCategory({ title });
      res.status(201).json(newCategory);
    } catch (err) {
      next(err);
    }
  }

  async getCategories(req, res, next) {
    try {
      const categories = await categoryService.getCategories();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }

  // async setCategory(req, res, next) {}

  async deleteCategory(req, res, next) {
    try {
      const title = req.params.categoryTitle;
      const result = await categoryService.deleteCategory(title);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

const categoryController = new CategoryController();

export { categoryController };

import { Product, Category } from "../models";

class CategoryService {
  constructor(productModel, categoryModel) {
    this.productModel = productModel;
    this.categoryModel = categoryModel;
  }

  // 카테고리 추가
  async addCategory(categoryInfo) {
    const { title } = categoryInfo;

    // 카테고리 중복 확인
    const founded = await this.categoryModel.findOne({ title });
    if (founded) {
      throw new Error("이미 존재하는 카테고리입니다.");
    }

    const createdNewCategory = await this.categoryModel.create(categoryInfo);
    return createdNewCategory;
  }

  // 카테고리 목록 조회
  async getCategories() {
    const categories = await this.categoryModel.find({});
    return categories;
  }

  // 카테고리 수정
  // aysnc setCategory(~) => {};

  // 카테고리 삭제
  async deleteCategory(title) {
    const category = await this.categoryModel.findOne({ title });
    if (!category) {
      throw new Error("해당 카테고리가 없습니다.");
    }

    const product = await this.productModel.findOne({
      categoryId: category.id,
    });
    if (product) {
      throw new Error("해당 카테고리에 제품이 있어 삭제가 불가합니다.");
    }

    const { deletedCount } = await this.categoryModel.deleteOne({
      _id: category.id,
    });
    if (deletedCount === 0) {
      throw new Error("해당 카테고리 삭제에 실패했습니다.");
    }

    return { result: "success" };
  }
}

const categoryService = new CategoryService(Product, Category);

export { categoryService };

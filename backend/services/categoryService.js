import { Product, Category } from "../models";

// 카테고리 추가
export const addCategoryService = async categoryInfo => {
  const { title } = categoryInfo;

  // 카테고리 중복 확인
  const founded = await Category.findOne({ title });
  if (founded) {
    throw new Error("이미 존재하는 카테고리입니다.");
  }

  const createdNewCategory = await Category.create(categoryInfo);
  return createdNewCategory;
};

// 카테고리 목록 조회
export const getCategoriesService = async () => {
  const categories = await Category.find({});
  return categories;
};

// 카테고리 수정
// 카테고리 삭제
export const deleteCategoryService = async title => {
  const category = await Category.findOne({ title });
  if (!category) {
    throw new Error("해당 카테고리가 없습니다.");
  }

  const product = await Product.findOne({ categoryId: category.id });
  if (product) {
    throw new Error("해당 카테고리에 제품이 있어 삭제가 불가합니다.");
  }

  const { deletedCount } = await Category.deleteOne({ _id: category.id });
  if (deletedCount === 0) {
    throw new Error("해당 카테고리 삭제에 실패했습니다.");
  }

  return { result: "success" };
};
// 특정 카테고리 조회

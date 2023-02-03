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
// 카테고리 수정
// 카테고리 삭제
// 특정 카테고리 조회

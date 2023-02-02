import { Product } from "../models";

// 상품 추가
export const addProductService = async productInfo => {
  const { title } = productInfo;

  // 상품 중복 확인
  const founded = await Product.findOne({ title });
  if (founded) {
    throw new Error("이미 존재하는 상품입니다.");
  }

  // DB 저장
  const createdNewProduct = await Product.create(productInfo);
  return createdNewProduct;
};

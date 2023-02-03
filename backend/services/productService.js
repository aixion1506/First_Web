import { Product, Category } from "../models";

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

// 상품 수정
// export const updateProductService = async productId => {};

// 상품 삭제

// 상품 전체 조회
export const getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

// 상품 카테고리별 조회
export const getProductsByCategoryService = async categoryTitle => {
  const category = await Category.findOne({ title: categoryTitle });
  // 카테고리가 없다면
  if (!category) {
    throw new Error("존재하지 않는 카테고리입니다.");
  }
  const products = await Product.find({ categoryId: category.id });
  return products;
};

// 특정 상품 조회
export const getProductDataService = async productId => {
  const product = await Product.findOne({ _id: productId });
  // 상품이 없다면
  if (!product) {
    throw new Error("존재하지 않는 상품입니다.");
  }
  return product;
};

// 상품 목록
// 상품 상세

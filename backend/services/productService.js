import { Product, Category } from "../models";

class ProductService {
  constructor(productModel, categoryModel) {
    this.productModel = productModel;
    this.categoryModel = categoryModel;
  }

  // 상품 추가
  async addProduct(productInfo) {
    const { title } = productInfo;

    // 상품 중복 확인
    const founded = await this.productModel.findOne({ title });
    if (founded) {
      throw new Error("이미 존재하는 상품입니다.");
    }

    // DB 저장
    const createdNewProduct = await this.productModel.create(productInfo);
    return createdNewProduct;
  }

  // 상품 수정
  // async updateProduct(productId) {};

  // 상품 삭제
  async deleteProduct(title) {
    const product = await this.productModel.findOne({ title });
    if (!product) {
      throw new Error("존재하지 않는 상품입니다.");
    }

    const { deletedCount } = await this.productModel.deleteOne({
      _id: product.id,
    });
    if (deletedCount === 0) {
      throw new Error("해당 상품이 삭제되지 않았습니다.");
    }

    return { result: "success" };
  }

  // 상품 전체 조회
  async getProducts() {
    const products = await this.productModel.find({});
    return products;
  }

  // 상품 카테고리별 조회
  async getProductsByCategory(title) {
    const category = await this.categoryModel.findOne({ title });
    // 카테고리가 없다면
    if (!category) {
      throw new Error("존재하지 않는 카테고리입니다.");
    }
    const products = await this.productModel.find({ categoryId: category.id });
    return products;
  }

  // 특정 상품 조회
  async getProduct(title) {
    const product = await this.productModel.findOne({ title });
    // 상품이 없다면
    if (!product) {
      throw new Error("존재하지 않는 상품입니다.");
    }
    return product;
  }

  // 상품 목록
  // 상품 상세
}

const productService = new ProductService(Product, Category);

export { productService };

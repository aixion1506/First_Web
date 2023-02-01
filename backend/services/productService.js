import { Product } from "../models";

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  // 상품 추가(관리자)
  async addProduct(productInfo) {
    const { title } = productInfo;

    // 이미 존재하는 상품명인지 확인
    const founded = await this.productModel.findOne({ title });
    if (founded) {
      throw new Error("이미 존재하는 상품명입니다.");
    }

    const createdNewProduct = await this.productModel.create(productInfo);
    return createdNewProduct;
  }
}

const productService = new ProductService(Product);

export default productService;

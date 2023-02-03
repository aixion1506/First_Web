import { productService } from "../services";

class ProductController {
  async addProduct(req, res, next) {
    try {
      const {
        title,
        categoryId,
        manufacturer,
        shortDescription,
        detailDescription,
        imageKey,
        inventory,
        price,
        searchKeywords,
      } = req.body;

      const newProduct = await productService.addProduct({
        title,
        categoryId,
        manufacturer,
        shortDescription,
        detailDescription,
        imageKey,
        inventory,
        price,
        searchKeywords,
      });
      res.status(201).json(newProduct);
    } catch (err) {
      next(err);
    }
  }

  async getProducts(req, res, next) {
    try {
      const products = await productService.getProducts();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  async getProductsByCategory(req, res, next) {
    const title = req.params.categoryTitle;
    try {
      const products = await productService.getProductsByCategory(title);
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  async getProduct(req, res, next) {
    const title = req.params.productTitle;
    try {
      const productData = await productService.getProduct(title);
      res.status(200).json(productData);
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req, res, next) {
    const title = req.params.productTitle;
    try {
      const result = await productService.deleteProduct(title);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

const productController = new ProductController();

export { productController };

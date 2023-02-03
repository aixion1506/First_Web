import {
  addProductService,
  getProductsService,
  getProductsByCategoryService,
  getProductDataService,
} from "../services/productService";

export const addProduct = async (req, res, next) => {
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

    const newProduct = await addProductService({
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
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductsByCategory = async (req, res, next) => {
  const categoryTitle = req.query.category;
  try {
    const products = await getProductsByCategoryService(categoryTitle);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductData = async (req, res, next) => {
  const id = req.params.productId;
  try {
    const productData = await getProductDataService(id);
    res.status(200).json(productData);
  } catch (err) {
    next(err);
  }
};


import {
  addProductService,
  getProductsService,
  getProductsByCategoryService,
  getProductDataService,
  deleteProductService,
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
  const title = req.params.categoryTitle;
  try {
    const products = await getProductsByCategoryService(title);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductData = async (req, res, next) => {
  const title = req.params.productTitle;
  try {
    const productData = await getProductDataService(title);
    res.status(200).json(productData);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  const title = req.params.productTitle;
  try {
    const result = await deleteProductService(title);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};


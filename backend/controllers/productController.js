import { addProductService } from "../services/productService";

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

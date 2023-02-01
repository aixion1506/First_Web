import { ProductService } from "../services";

const addProduct = async (req, res, next) => {
  try {
    const {
      title,
      categoryTitle,
      manufacturer,
      shortDescription,
      detailDescription,
      imageKey,
      inventory,
      price,
      searchKeywords,
    } = req.body;

    const newProduct = await ProductService.addProduct({
      title,
      categoryTitle,
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

export { addProduct };

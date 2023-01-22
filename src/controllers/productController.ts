import { Request, Response } from 'express';
import ProductService from '../services/productService';
import IProduct from '../interfaces/IProduct';

class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public addProduct = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const { type, message } = await this.service.addProduct(product);
    if (type) return res.status(type).json({ message });
    res.status(201).json(message);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };
}

export default ProductController;
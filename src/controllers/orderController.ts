import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import OrderService from '../services/orderService';
import ProductService from '../services/productService';
import { IAuthorization } from '../interfaces/IAuthorization';

class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (req: Request, res: Response) => {
    const ordens = await this.service.getAll();
    res.status(200).json(ordens);
  };

  public addOrder = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const payload = verify(authorization as string, 'secret') as IAuthorization;
    const userId = payload.id;
    const { type, message } = await this.service.addOrder(userId, productsIds);
    if (type) return res.status(type).json({ message });
    const productService = new ProductService();
    await productService.updateProducts(productsIds, message);
    res.status(201).json({ userId, productsIds });
  };
}

export default OrderController;
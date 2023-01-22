import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import validateIds from '../middlewares/orderMiddleware';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll() {
    return this.model.getAll();
  }

  public async addOrder(id: number, productsIds: number[]) {
    const idsValidation = validateIds(productsIds);
    if (idsValidation.type) return idsValidation;
    const orderId = await this.model.addOrder(id);
    return { type: null, message: orderId };
  }
}
import IProduct from '../interfaces/IProduct';
import { validateAmount, validateName } from '../middlewares/productMiddleware';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async addProduct(product: IProduct) {
    const nameValidation = validateName(product.name);
    const amountValidation = validateAmount(product.amount);
    if (nameValidation.type || amountValidation.type) {
      return {
        type: nameValidation.type ?? amountValidation.type,
        message: nameValidation.message ?? amountValidation.message,
      };
    }
    const result = await this.model.create(product);
    return { type: null, message: result };
  }

  public getAll() {
    return this.model.getAll();
  }

  public async updateProducts(productsIds: number[], orderId: any) {
    const updatedProducts = await Promise.all(
      productsIds.map(async (prodId) => {
        const id = await this.model.updateProduct(prodId, orderId);
        return id;
      }),
    );
    return { type: null, message: updatedProducts };
  }
}

import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct) {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    return { id: insertId, ...product };
  }

  public async getAll() {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result;
  }

  public async updateProduct(prodId: number, orderId: number | string) {
    const query = 'UPDATE Trybesmith.Products SET orderId= ? WHERE id= ?';
    await this.connection.execute(query, [orderId, prodId]);
    return prodId;
  }
}
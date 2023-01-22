import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const query = `
      SELECT tblOrder.id, tblOrder.userId, JSON_ARRAYAGG(tblProducts.id) as productsIds
      FROM Trybesmith.Orders as tblOrder
      INNER JOIN Trybesmith.Products as tblProducts
      ON tblOrder.id = tblProducts.orderId
      GROUP BY tblOrder.id
      ORDER BY tblOrder.userId;
    `;
    const [result] = await this.connection.execute<ResultSetHeader>(query);
    return result;
  }

  public async addOrder(id: number) {
    const query = `
      INSERT INTO Trybesmith.Orders (userId) VALUES (?);
    `;
    const [result] = await this.connection.execute<ResultSetHeader>(query, [id]);
    return result;
  }
}

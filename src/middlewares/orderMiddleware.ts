import { IOrderResponse } from '../interfaces/IOrderResponse';

export default (productsIds: number[]): IOrderResponse => {
  if (!productsIds) return { type: 400, message: '"productsIds" is required' };

  if (typeof productsIds !== 'object') {
    return { type: 422, message: '"productsIds" must be an array' };
  }
  if (!productsIds.length) {
    return { type: 422, message: '"productsIds" must include only numbers' };
  } 
  return { message: 'error' };
};
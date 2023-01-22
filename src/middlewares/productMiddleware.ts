import { IResponse } from '../interfaces/IResponse';

export function validateName(name: string): IResponse {
  if (!name) return { type: 400, message: '"name" is required' };

  if (typeof name !== 'string') return { type: 422, message: '"name" must be a string' };
  if (name.length < 3) {
    return { type: 422, message: '"name" length must be at least 3 characters long' };
  } 
  return {};
}

export function validateAmount(amount: string) {
  if (!amount) return { type: 400, message: '"amount" is required' };
  if (typeof amount !== 'string') return { type: 422, message: '"amount" must be a string' };
  if (amount.length < 3) {
    return { type: 422, message: '"amount" length must be at least 3 characters long' };
  }
  return {};
}
import { IResponse } from '../interfaces/IResponse';

export function validateName(name: string): IResponse {
  if (!name) return { type: 400, message: '"username" is required' };

  if (typeof name !== 'string') {
    return { type: 422, message: '"username" must be a string' };
  }
  if (name.length < 3) {
    return {
      type: 422,
      message: '"username" length must be at least 3 characters long',
    };
  }
  return {};
}

export function validateClass(classe: string) {
  if (!classe) return { type: 400, message: '"classe" is required' };
  if (typeof classe !== 'string') {
    return { type: 422, message: '"classe" must be a string' };
  }
  if (classe.length < 3) {
    return {
      type: 422,
      message: '"classe" length must be at least 3 characters long',
    };
  }
  return {};
}

export function validateLevel(level: number) {
  if (level === undefined || level === null) {
    return { type: 400, message: '"level" is required' };
  }
  if (typeof level !== 'number') {
    return { type: 422, message: '"level" must be a number' };
  }
  if (level < 1) {
    return { type: 422, message: '"level" must be greater than or equal to 1' };
  }
  return {};
}

export function validatePassword(password: string) {
  if (!password) return { type: 400, message: '"password" is required' };
  if (typeof password !== 'string') {
    return { type: 422, message: '"password" must be a string' };
  }
  if (password.length < 8) {
    return {
      type: 422,
      message: '"password" length must be at least 8 characters long',
    };
  }
  return {};
}

export function validateNameClass(username: string, classe: string) {
  const nameValidation = validateName(username);
  const classValidation = validateClass(classe);

  if (nameValidation.type || classValidation.type) {
    return {
      type: nameValidation.type ?? classValidation.type,
      message: nameValidation.message ?? classValidation.message,
    };
  }
  return {};
}

export function validateLevelPassword(level: number, password: string) {
  const levelValidation = validateLevel(level);
  const passwordValidation = validatePassword(password);
  if (levelValidation.type || passwordValidation.type) {
    return {
      type: levelValidation.type ?? passwordValidation.type,
      message: levelValidation.message ?? passwordValidation.message,
    };
  }
  return {};
}
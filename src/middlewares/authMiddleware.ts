import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }

  try {
    jwt.verify(authorization as string, process.env.JWT_SECRET as string);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
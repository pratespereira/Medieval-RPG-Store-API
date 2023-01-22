import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import UserService from '../services/userService';

class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public addUser = async (req: Request, res: Response) => {
    const data = req.body as IUser;
    const { type, message } = await this.service.addUser(data);
    if (type) return res.status(type).json({ message });
    const tokenLoad = { id: data.id, name: data.username };
    const token = jwt.sign(tokenLoad, 'secret');
    res.status(201).json({ token });
  };
}

export default UserController;
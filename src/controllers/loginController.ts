import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/loginService';

class LoginController {
  constructor(readonly service = new LoginService()) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await this.service.login(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user }, 'secret', { expiresIn: '1d' });
    return res.json({ token });
  }
}

export default LoginController;
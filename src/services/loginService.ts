import UserModel from '../models/userModel';
import connection from '../models/connection';

export default class LoginService {
  constructor(readonly model = new UserModel(connection)) {}

  public async login(username: string, password: string) {
    const user = this.model.getByUsernameAndPassword(username, password);
    return user;
  }
}
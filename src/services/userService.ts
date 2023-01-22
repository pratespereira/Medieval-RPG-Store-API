import IUser from '../interfaces/IUser';
import {
  validateLevelPassword,
  validateNameClass,
} from '../middlewares/userMiddleware';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async addUser(user: IUser) {
    const { username, classe, level, password } = user;
    const valitationOne = validateNameClass(username, classe);
    const valitationTwo = validateLevelPassword(level, password);
    if (valitationOne.type || valitationTwo.type) {
      return {
        type: valitationOne.type ?? valitationTwo.type,
        message: valitationOne.message ?? valitationTwo.message,
      };
    }
    const result = await this.model.create(user);
    return { type: null, message: result };
  }
}

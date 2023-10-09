import sequelize, { DataTypes } from '../config/database';
import { IUser } from '../interfaces/user.interface';

import user from '../models/user';

class UserService {
  private User = user(sequelize, DataTypes);

  //create a new user
  public signUp = async (body) => {
    const user = await this.User.findOne({where: {email: body.email}});
    if(user) throw new Error("User already registered !!")
    const data = await this.User.create(body);
    return data;
  };
}

export default UserService;
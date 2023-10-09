import sequelize, { DataTypes } from '../config/database';
import { IUser } from '../interfaces/user.interface';
import  jwt  from 'jsonwebtoken';
import user from '../models/user';
import bcrypt from 'bcrypt';

class UserService {
  private User = user(sequelize, DataTypes);

  //create a new user
  public signUp = async (body: IUser) => {
    const user = await this.User.findOne({where: {email: body.email}});
    if(user) throw new Error("User already registered !!")
    const saltRounds = 10;
    const hash = bcrypt.hashSync(body.password, saltRounds);
    body.password = hash;
    const data = await this.User.create(body);
    return data.email;
  };

  //Login user
  public signIn = async (body) => {
    const data = await this.User.findOne({where: {email: body.email}});
    if(!data) throw new Error("User not Found !!")
    const token = jwt.sign({email: data.email, id: data.id},process.env.SECRET_KEY)
    return token;
  };
}

export default UserService;
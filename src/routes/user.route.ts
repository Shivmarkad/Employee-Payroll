import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {

    //route for user registration
    this.router.post(
      '',
      this.UserValidator.newUser,
      this.UserController.signUp
    );
    
    //route to login user
    this.router.post(
      '/login',
      this.UserController.signIn
    );

  };
  

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;

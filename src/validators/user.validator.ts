import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public newUser = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      firstName: Joi.string().min(4).required(),
      lastName: Joi.string().min(4).required(),
      email: Joi.string().min(4).required(),
      password: Joi.string().min(4).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default UserValidator;

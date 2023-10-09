import express, { IRouter } from 'express';
import employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';

class EmployeeRoutes {
  private employeeController = new employeeController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {

    //route for get all employees
    this.router.get('',userAuth, this.employeeController.getEmployees);
  
  };
  
  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeRoutes;

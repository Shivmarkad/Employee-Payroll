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

    //route for add employee details
    this.router.post('',userAuth, this.employeeController.addEmployees);

    //route for remove employee details
    this.router.put('/:empId',userAuth, this.employeeController.removeEmployeeDetails);
  
    //route for update employee details
    this.router.put('/update/:empId',userAuth, this.employeeController.updateEmployeeDetails);
  };
  
  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeRoutes;

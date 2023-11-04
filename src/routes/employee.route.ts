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

    //route for get highest salary employee details
    this.router.get('/highsal',userAuth, this.employeeController.getHSEmployeeDetails);

    //route to get employees details having same date of join
    this.router.get('/doj',userAuth, this.employeeController.getEmployeeByDoj);

    //route to get count of employees joined on same date
    this.router.get('/doj/count',userAuth, this.employeeController.getCount);

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

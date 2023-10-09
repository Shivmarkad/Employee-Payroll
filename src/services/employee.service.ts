import sequelize, { DataTypes } from '../config/database';
import { IEmployee } from '../interfaces/employee.interface';
import employee from '../models/employee';

class EmployeeService {
  private Employee = employee(sequelize, DataTypes);

  //get all employees details
  public getEmployees = async ():Promise<any> => {
    const data = await this.Employee.findAll();
    return data;
  };

}

export default EmployeeService;
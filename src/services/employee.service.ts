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

  //Add employees details
  public addEmployees = async (body: IEmployee):Promise<any> => {
    const data = await this.Employee.create(body);
    return data;
  };

   //remove employees details
   public removeEmployeeDetails = async (empId):Promise<any> => {
    const data = await this.Employee.destroy({where: {id: empId}});
    return data;
  };

   //update employees details
   public updateEmployeeDetails = async (empId,details: IEmployee):Promise<any> => {
    const data = await this.Employee.update(details,{where: {id: empId}});
    return data;
  };
}

export default EmployeeService;
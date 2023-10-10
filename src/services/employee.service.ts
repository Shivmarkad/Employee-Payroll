import { Op } from 'sequelize';
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

  //get highest salary employee details
  public getHSEmployeeDetails = async (details:string[]):Promise<any> => {
    const data = await this.Employee.findAll({
      attributes: details,
      where:{
        salary: {
          [Op.eq]:
          sequelize.literal(`(SELECT MAX(salary) FROM "${this.Employee.getTableName()}")`)}
      }
    });
    return data;
  };

  //get employee details with date of join
  public getmployeeByDoj = async (doj):Promise<any> => {
    const data = await this.Employee.findAll({
      where:{
        DOJ: {  [Op.eq]:  doj }
      },   
      order: ['name']
    });
    return data;
  };

  //get employee details with date of join
  public getcount = async (doj):Promise<any> => {
    const data = await this.Employee.count({
      where:{
        DOJ: {  [Op.eq]:  doj }
      }
    });
    return data;
  };
}

export default EmployeeService;
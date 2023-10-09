/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import employeeService from '../services/employee.service';

import { Request, Response, NextFunction } from 'express';

class EmployeeController {
  public EmployeeService = new employeeService();

  /**
   * Controller to GET employee details
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.EmployeeService.getEmployees();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Employee details fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: error.message
      });
    }
  };

  public addEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.EmployeeService.addEmployees(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Employee details added successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: error.message
      });
    }
  };
}

export default EmployeeController;

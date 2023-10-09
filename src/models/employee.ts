/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Model } from 'sequelize';
import { IEmployee } from '../interfaces/employee.interface';

export default (sequelize, DataTypes) => {
  class Employee extends Model<IEmployee> implements IEmployee {
    public name;
    public role;
    public gender;
    public DOJ;
    public salary;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      gender: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      DOJ : DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'employee'
    }
  );
  return Employee;
};

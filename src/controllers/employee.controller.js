const employeeController = {}

const { restart } = require('nodemon');
const employee = require('../models/employee')

employeeController.getEmployee = async (req,res)=> {
    const employees = await employee.find();
    res.json(employees);
}
employeeController.getEmployees = (req,res)=> res.send('get all employees');
employeeController.saveEmployee = async (req,res)=> {
    console.log(req.body);
    const newEmployee = new employee(req.body);
    res.send({ok:200, result: 0})
    await newEmployee.save();
    //res.send({message: "Employee created"});
};
employeeController.updateEmployee = (req,res)=> res.send('update employee');
employeeController.deleteEmployee = (req,res)=> res.send('delete employee');

module.exports = employeeController;
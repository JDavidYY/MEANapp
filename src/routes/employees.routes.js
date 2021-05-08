const { Router } = require('express');

const router = Router();

const employeeController = require('../controllers/employee.controller');

router.get('/employee', employeeController.getEmployee);
router.get('/employees', employeeController.getEmployees);
router.post('/updateEmployee', employeeController.saveEmployee);
router.put('/saveEmployee', employeeController.updateEmployee);
router.delete('/deleteEmployee', employeeController.deleteEmployee);

/*router.post('/emploi', (req,res)=> res.send('hello'));
router.put('/hello', (req,res)=> res.send('hello'));
router.delete('/hello', (req,res)=> res.send('hello'));
*/

module.exports = router;
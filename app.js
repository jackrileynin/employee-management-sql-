const inquirer = require('inquirer');
const {connection} = require('./config');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployee } = 
require('./sql/querey.js');
 
 startPrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
      ]
    }
  ])
};

const start = () => {
  startPrompt()
    .then((data) => {
      switch (data.action) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployee();
          break;
      }
    });
}
 
 

connection.connect(err => {
 
 start();
startPrompt();


  if (err) throw err; 
  console.log('Connected to the database');
});



module.exports = { startPrompt, start };
         
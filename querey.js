  const {connection}= require('./config.js');
const inquirer = require('inquirer');
const { start } = require('./app.js');
const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
};

const viewRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
};

const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
};

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?'
        }
    ])
    .then((data) => {
        connection.query('INSERT INTO department SET ?', data, (err, res) => {
            if (err) throw err;
            console.log('Department added');
            start();
        });
    });
};

const addRole = () => { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department id of the role?'
        }
    ])
    .then((data) => {
        connection.query('INSERT INTO role SET ?', data, (err, res) => {
            if (err) throw err;
            console.log('Role added');
            start();
        });
    });
};

const addEmployee = () => { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role id of the employee?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager id of the employee?'
        }
    ])
    .then((data) => {
        connection.query('INSERT INTO employee SET ?', data, (err, res) => {
            if (err) throw err;
            console.log('Employee added');
            start();
        });
    });
};

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'What is the id of the employee?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the new role id of the employee?'
        }
    ])
    .then((data) => {
        connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [data.role_id, data.employee_id], (err, res) => {
            if (err) throw err;
            console.log('Employee updated');
            start();
        });
    });
};

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
};

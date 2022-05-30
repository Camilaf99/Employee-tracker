const { up } = require("inquirer/lib/utils/readline");

const getAllEmployees = (connection, callback) => {
    connection.query('select e.id, e.first_name, e.last_name, e.role_id, r.title, e.manager_id from employees e, roles r where e.role_id = r.id', callback);
};

const addEmployee = (connection, first_name, last_name, employee_role, employee_manager, callback) => {
    connection.execute('insert into employees (first_name, last_name, role_id, manager_id) values (?,?,?,?)',[first_name, last_name, employee_role, employee_manager], callback);
};

const updateEmployeeRole = (connection, role_id, employee_id,callback) => {
    connection.execute('update employees set role_id = ? where employees.id = ?;',[role_id,employee_id], callback);
};

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.updateEmployeeRole = updateEmployeeRole;
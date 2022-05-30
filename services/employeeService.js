const getAllEmployees = (connection, callback) => {
    connection.query('select e.id, e.first_name, e.last_name, e.role_id, r.title, e.manager_id from employees e, roles r where e.role_id = r.id', callback);
};

const addEmployee = (connection, first_name, last_name, employee_role, employee_manager, callback) => {
    connection.execute('insert into employees (first_name, last_name, role_id, manager_id) values (?,?,?,?)',[first_name, last_name, employee_role, employee_manager], callback);
};

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
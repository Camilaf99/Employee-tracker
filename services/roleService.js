
const getAllRoles = (connection, callback) => {
    connection.query('select r.id, r.title, r.salary, r.department_id, d.name as department_name from roles r, departments d where r.department_id = d.id', callback);
};

const addRole = (connection, title, salary, department_id, callback) => {
    connection.execute('insert into roles (title, salary, department_id) values (?,?,?)', [title,salary, department_id], callback);
};


exports.getAllRoles = getAllRoles;
exports.addRole = addRole;
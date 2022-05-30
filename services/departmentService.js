// 
const getAllDepartments = (connection, callback) => {
    connection.query('select * from employee_tracker.departments', callback);
};

const addDepartment = (connection, departmentName, callback) => {
    connection.execute('insert into departments (name) values (?)', [departmentName], callback);
};

exports.getAllDepartments = getAllDepartments;
exports.addDepartment = addDepartment;
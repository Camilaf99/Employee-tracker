const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');

const departments = require("./services/departmentService");
const roles = require("./services/roleService");
const employees = require("./services/employeeService");

const connection = mysql.createConnection({
    host: "localhost", 
    user: "EmployeeTracker",
    database: "employee_tracker",
    password: "Emca119!"
});

function mainMenu() {
    const viewChoices = [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add a Role",
        "Add an Employee",
        "Update Employee's Role",
        "Exit"
    ];
    
    inquirer.prompt([
        {
          name: "actions",
          type: "list",
          message: "What would you like to do?",
          choices: viewChoices
        },
    ]).then(handleMainMenuOptions);
}

function viewAllDepartments() {
    departments.getAllDepartments(connection, (err, result, fields) => {
        if(err) {
            console.error(err);
        } else {
          if(result) {
              const table = cTable.getTable(result);
              console.log(table);
          }
        }
        mainMenu();
    });
}

function viewAllRoles() {
    roles.getAllRoles(connection, (err, result, fields) => {
        if(err) {
            console.error(err);
        } else {
          if(result) {
              const table = cTable.getTable(result);
              console.log(table);
          }
        }
        mainMenu();
    });
}

function viewAllEmployees() {
    employees.getAllEmployees(connection, (err, result, fields) => {
        if(err) {
            console.error(err);
        } else {
          if(result) {
              const table = cTable.getTable(result);
              console.log(table);
          }
        }
        mainMenu();
    });
}

function addDepartment() {
    inquirer.prompt ([
        {
            name: "department_name",
            type:"input",
            message:"Please provide name for the new department",
            validate: (s) => {
                if(s && !(s.trim() === "")) return true;
                else return "Please provide a valid department name";
            }
        }
    ]).then((a) => {
        departments.addDepartment(connection, a.department_name, (err, result, field) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Department added successfully");
            }
            mainMenu();
        });
    });
}

function addRole() {
    inquirer.prompt ([
        {
            name: "role_name",
            type:"input",
            message:"Please provide name for the new role",
            validate: (s) => {
                if(s && !(s.trim() === "")) return true;
                else return "Please provide a valid role title";
            }
        },
        {
            name:"role_salary",
            type:"numerical",
            message:"Please provide role salary",
            validate: (v) => {
                if(v && v > 0) {
                    return true;
                } else {
                    return "Invalid salary range";
                }
            }
        },
        {
            name:"role_department",
            type:"numerical",
            message:"Please provide department id for new role",
            validate: (v) => {
                if(v && v > 0) {
                    return true;
                } else {
                    return "Invalid department id";
                }
            }
        }
    ]).then((a) => {
        const role_title = a.role_name;
        const role_salary = a.role_salary;
        const role_dept = a.role_department;

        roles.addRole(connection,role_title,role_salary,role_dept, (err, result, fields) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Role added successfully");
            }
            mainMenu();
        });
    });
}

function addEmployee() {
    inquirer.prompt ([
        {
            name:"employee_firstname",
            type:"input",
            message:"Please provide employee first name",
            validate: (s) => {
                if(s && !(s.trim() === "")) return true;
                else return "Please provide a valid first name";
            }
        },
        {
            name:"employee_lastname",
            type:"input",
            message:"Please provide employee last name",
            validate: (s) => {
                if(s && !(s.trim() === "")) return true;
                else return "Please provide a valid last name";
            }
        },
        {
            name:"employee_role",
            type:"numerical",
            message:"Please provide employee role id",
            validate: (v) => {
                if(v && v > 0) {
                    return true;
                } else {
                    return "Invalid employee role id";
                }
            }
        },
        {
            name:"employee_manager",
            type:"numerical",
            message:"Please provide manager's id",
            default: null,
            validate: (v) => {
                if(!v || v > 0) {
                    return true;
                } else {
                    return "Invalid manager id";
                }
            }
        }
    ]).then((a) => {
        const fn = a.employee_firstname;
        const ln = a.employee_lastname;
        const er = a.employee_role;
        const em = !a.employee_manager ? null : a.employee_manager;
        employees.addEmployee(connection, fn, ln, er, em, (err, result, fields) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Employee was created successfully");
            }
            mainMenu();
        });
    });
}

function updateEmployeeRole() {
    inquirer.prompt ([
        {
            name:"update_employee",
            type:"numerical",
            message:"Please provide employee id",
            validate: (v) => {
                if(v && v > 0) {
                    return true;
                } else {
                    return "Invalid employee id";
                }
            }
        },
        {
            name:"update_role",
            type:"input",
            message:"Please provide employee new role",
            validate: (v) => {
                if(v && v > 0) {
                    return true;
                } else {
                    return "Invalid employee role id";
                }
            }
        }
    ]).then((a)=> {
        const eid = a.update_employee;
        const rid = a.update_role;

        employees.updateEmployeeRole(connection, rid, eid, (err, result, fields) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Employee was updated successfully");
            }
            mainMenu();
        });
    });
}

function handleExit() {
    inquirer.prompt([
        {
            name: "confirmExit",
            type: "confirm",
            message: "Are you sure you want to quit?"
        }
    ]).then((a) => {
        if(a.confirmExit) {
            process.exit(0);
        } else {
            mainMenu();
        }
    });
}

function handleMainMenuOptions(answers) {
    switch (answers.actions) {
        case "View Departments":
            viewAllDepartments();
            break;
        case "View Roles":
            viewAllRoles();
            break;
        case "View Employees":
            viewAllEmployees();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Add a Role":
            addRole();
            break;
        case "Add an Employee":
            addEmployee();
            break;
        case "Update Employee's Role":
            updateEmployeeRole();
            break;
        case "Exit":
        default:
            handleExit();
    }
}


mainMenu();

/*
const viewEmployees = [
    "Emily Bee",
    "Nyla Lyon",
    "Marco Cantu",
    "Theo Hanna",
    "Nicky Mack",
    "Ryan Hope"
]
const updateChoices = [
    "First Name",
    "Last Name",
    "Role",
    ""
]
const employeeRoles = [
    "Manager",
    "Sales",
    "Accountant",
    "Staff"
]


*/


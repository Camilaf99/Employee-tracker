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

inquirer
  .prompt([
      {
        name: "actions",
        type: "list",
        message: "What would you like to do?",
        choices: viewChoices
      },
  ])
  .then((answers) => {
      switch (answers.actions) {
          case "View Departments":
              departments.getAllDepartments(connection, (err, result, fields) => {
                  if(err) {
                      console.error(err);
                  } else {
                    if(result) {
                        const table = cTable.getTable(result);
                        console.log(table);
                    }
                  }
              });
              break;
          case "View Roles":
            roles.getAllRoles(connection, (err, result, fields) => {
                if(err) {
                    console.error(err);
                } else {
                  if(result) {
                      const table = cTable.getTable(result);
                      console.log(table);
                  }
                }
            });
              break;
          case "View Employees":
            employees.getAllEmployees(connection, (err, result, fields) => {
                if(err) {
                    console.error(err);
                } else {
                  if(result) {
                      const table = cTable.getTable(result);
                      console.log(table);
                  }
                }
            });
              break;
          case "Add Department":
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
                    });
                });
              break;
          case "Add a Role":
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
                    });
                });
              break;
          case "Add an Employee":
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
                });
            });
            break;
          case "Update Employee's Role":
              console.log("I want to update an employee's role");
              break;
          case "Exit":
          default:
              console.log("Exit");
      }
//    console.log(answers.actions);
  });



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

/*   
     inquirer.prompt ([
         {
             name:"employee_firstname",
             type:"input",
             message:"Please provide employee first name"
         },
         {
             name:"employee_lastname",
             type:"input",
             message:"Please provide employee last name"
         },
         {
             name:"employee_role",
             type:"input",
             message:"Please provide employee role"
         },
         {
             name:"employee_manager",
             type:"input",
             message:"Please provide manager's id"
         }
     ]);

     inquirer
     .prompt ([
         {
             name:"update_employee",
             type:"input",
             message:"Please provide employee id"
         }
     ]);

     inquirer
     .prompt ([
         {
             name:"update_role",
             type:"input",
             message:"Please provide employee new role"
         }
     ]); */
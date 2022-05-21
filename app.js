var inquirer = require("inquirer");


const viewChoices = [
    "View Departments",
    "View Roles",
    "Add a role",
    "View Employees",
    "Add an Employee",
    "Update Employee",
    "exit"
]
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
    console.log(answer.actions);
  });
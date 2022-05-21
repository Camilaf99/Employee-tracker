var inquirer = require("inquirer");


const viewChoices = [
    "View Departments",
    "View Roles",
    "View Employees",
    "Add department",
    "Add a role",
    "Add an Employee",
    "Update Employee's role",
    "exit"
]
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
    console.log(answers.actions);
  });

  inquirer
   .prompt ([
       {
           name: "department_name",
           type:"input",
           message:"Please provide name for the new department"
       }
   ]);

   inquirer 
    .prompt ([
        {
            name: "role_name",
            type:"input",
            message:"Please provide name for the new role"
        }
    ]);

     inquirer
     .prompt ([
         {
             name:"role_salary",
             type:"numerical",
             message:"Please provide role salary"
         }
     ]);

     inquirer
     .prompt ([
         {
             name:"role_department",
             type:"input",
             message:"Please provide department for new role"
         }
     ]);

     inquirer
     .prompt ([
         {
             name:"employee_firstname",
             type:"input",
             message:"Please provide employee first name"
         }
     ]);

     inquirer
     .prompt ([
         {
             name:"employee_lastname",
             type:"input",
             message:"Please provide employee last name"
         }
     ]);

     inquirer
     .prompt ([
         {
             name:"employee_role",
             type:"input",
             message:"Please provide employee role"
         }
     ]);

     inquirer
     .prompt ([
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
     ]);
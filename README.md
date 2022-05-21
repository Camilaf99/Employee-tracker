# Employee Tracker :smile:

## Your Task 
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

##User Story
```AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
##Acceptance Criteria
```GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
##Mock-Up
The following video shows an example of the application being used from the command line: (link to video)

## Instructions
Design the database schema as shown in the following image: 

## Grading Requirements
## :relaxed: NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

* A repository that has no code

* A repository that includes a unique name but nothing else

* A repository that includes only a README file but nothing else

* A repository that only includes starter code

This Challenge is graded based on the following criteria:

## Deliverables: 10%
* Your GitHub repository containing your application code.
## Walkthrough Video: 27%
* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

## Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

* Uses the Inquirer package (Links to an external site.).

* Uses the MySQL2 package (Links to an external site.) to connect to a MySQL database.

* Uses the console.table package (Links to an external site.) to print MySQL rows to the console.

* Follows the table schema outlined in the homework instructions.

## Repository Quality: 13%
* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

## Application Quality 10%
* The application user experience is intuitive and easy to navigate.
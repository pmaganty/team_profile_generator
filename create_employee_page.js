const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
const util = require("util");

let employee_type = "";
let employees = [];

const writeFileAsync = util.promisify(fs.writeFile);

function promptManagerInfo() {
    return inquirer.prompt([
        {
        type: "input", //input, number, confirm, list, rawlist, expand, checkbox, password, editor
        name: "manager_name",
        message: "Hello Manager! What is your name?" //</user_will_provide_github_username>
        },
        {
        type: "input",
        name: "manager_id",
        message: "What is your id?"
        },
        {
        type: "input",
        name: "manager_email",
        message: "What is your email?"
        },
        {
        type: "input",
        name: "manager_office",
        message: "What is your office number?" 
        },
        {
        type: "list",
        name: "add_employee",
        message: "Perfect! Would you like to add another employee?", 
        choices: ['Yes','No'] //if no then render page with just manager
        }
    ]);
}

function promptEngineerInfo() {
    return inquirer.prompt([
        {
        type: "input", //input, number, confirm, list, rawlist, expand, checkbox, password, editor
        name: "engineer_name",
        message: "What is the engineer's name?" 
        },
        {
        type: "input", //input, number, confirm, list, rawlist, expand, checkbox, password, editor
        name: "engineer_id",
        message: "What is the engineer's id?" 
        },
        {
        type: "input",
        name: "engineer_email",
        message: "What is the engineer's email?"
        },
        {
        type: "input",
        name: "engineer_github_username",
        message: "What is the engineer's github username?"
        },
        {
        type: "list",
        name: "add_employee",
        message: "Perfect! Would you like to add another employee?", 
        choices: ['Yes','No'] //if no then render page
        }
    ]);
}

function promptInternInfo() {
    return inquirer.prompt([
        {
        type: "input", //input, number, confirm, list, rawlist, expand, checkbox, password, editor
        name: "intern_name",
        message: "What is the intern's name?" //</user_will_provide_github_username>
        },
        {
        type: "input", //input, number, confirm, list, rawlist, expand, checkbox, password, editor
        name: "intern_id",
        message: "What is the intern's id?" 
        },
        {
        type: "input",
        name: "intern_email",
        message: "What is the intern's email?"
        },
        {
        type: "input",
        name: "intern_school",
        message: "What is the intern's school?"
        },
        {
        type: "list",
        name: "add_employee",
        message: "Perfect! Would you like to add another employee?", 
        choices: ['Yes','No'] //if no then render page
        }
    ]);
}

function promptWhichEmployee() {
    return inquirer.prompt([
        {
        type: "list", //input, number, confirm, list, rawlist, expand, checkbox, password, editor
        name: "employee_type",
        message: "Which employee would you like to add?", 
        choices: ['Engineer','Intern']
        }
    ]);
}

async function addEmployees(add, answers) {
    while (add == "Yes") {
        await promptWhichEmployee()
            .then(function(answers) {
                //console.log("PROMPTED FOR WHICH EMPLOYEE"); //FOR DEBUG

                if (answers.employee_type == "Engineer") {
                    //const engineer = new Manager(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_g);
                    //employees.push(manager);
                    employee_type = "engineer";
                    return promptEngineerInfo();
                } else if (answers.employee_type == "Intern") {
                    employee_type = "intern";
                    return promptInternInfo();
                } /*else {
                    add = "No";
                    break;
                }*/
            })
            .then(function(answers){
                //console.log("PROMPTED FOR SPECIFIC EMPLOYEE QUESTIONS"); //FOR DEBUG

                //console.log(employee_type); //FOR DEBUG
                if (employee_type == "engineer") {
                    const engineer = new Engineer(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github_username);
                    employees.push(engineer);
                } else if (employee_type == "intern") {
                    const intern = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school);
                    employees.push(intern);
                }

                add = answers.add_employee;
                //console.log("add = " + add); //FOR DEBUG

                return add;
            })
    }

    //console.log(employees); //FOR DEBUG

    let html = render(employees);
    //console.log(html); //FOR DEBUG

    return writeFileAsync("./output/team.html", html);


}

promptManagerInfo()
    .then(function(answers) {
        //console.log("PROMPTED INITIAL MANAGER QUESTIONS"); //FOR DEBUG

        const manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office);
        employees.push(manager);
        //console.log(employees[0]);

        let add = answers.add_employee;
        //console.log("add = " + add);

        addEmployees(add, answers);

    })

const inquirer = require("inquirer");
const fs = require("fs");
const htmlTemplate = require('./template/htmlTemplate');
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const team = {};
team.members = [];
team.title = "";

async function action() {
  const action = await inquirer.prompt([
    {
      type: "list",
      message: "Would you like to add more members?",
      choices: [
        "add an employee",
        "add an engineer",
        "add an intern",
        "No, generate my team page",
      ],
      name: "newMember",
    },
  ]);

  switch (action.newMember) {
    case "add an engineer":
      addEngineer();
      break;

    case "add an intern":
      addIntern();
      break;

    case "add an employee":
      addEmployee();
      break;

    case "No, generate my team page":
      generatePage();
      break;
  }
}

async function addManager() {
  const manager = await inquirer.prompt([
    {
      message: "What is your manager's name?",
      name: "name",
    },
    {
      message: "What is your manager's email address?",
      name: "email",
    },

    {
      type: "number",
      message: "What is your manager's office number?",
      name: "officeNumber",
    },
  ]);
  const id = 1;
  team.manager = new Manager(
    manager.name,
    id,
    manager.email,
    manager.officeNumber
  );
  console.log("You have added a manager for your team.");
  action();
}

async function addEmployee() {
  const employee = await inquirer.prompt([
    {
      message: "Enter employee's name.",
      name: "name",
    },
    {
      message: "Enter employee's email address?",
      name: "email",
    },
  ]);

  team.members.push(
    new Employee(employee.name, team.members.length + 2, employee.email)
  );
  console.log("You have added an employee to your team.");
  action();
}

async function addEngineer() {
  const engineer = await inquirer.prompt([
    {
      message: "Enter engineer's name?",
      name: "name",
    },
    {
      message: "Enter engineer's email address?",
      name: "email",
    },
    {
      message: "Enter engineer's Github profile?",
      name: "github",
    },
  ]);

  team.members.push(
    new Engineer(
      engineer.name,
      team.members.length + 2,
      engineer.email,
      engineer.github
    )
  );
  console.log("You have added an engineer to your team.");
  action();
}

async function addIntern() {
  const intern = await inquirer.prompt([
    {
      message: "Enter intern's name?",
      name: "name",
    },
    {
      message: "Enter intern's email address?",
      name: "email",
    },
    {
      message: "Enter intern's school?",
      name: "school",
    },
  ]);

  team.members.push(
    new Intern(
      intern.name,
      team.members.length + 2,
      intern.email,
      intern.school
    )
  );
  console.log("You have added an Intern to your team.");
  action();
}

async function generatePage() {
  let draftHtml = htmlTemplate.htmlBegining(team.title);

  for (let i = 0; i < team.members.length; i++) {
    draftHtml += `
        <div class="member-card">
            <div class="card-top">
                <h2>${team.members[i].name}</h2>
                <h2>${team.members[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${team.members[i].id}</p>
                <p>Email: <a href="mailto:${team.members[i].email}">${team.members[i].email}</a></p>
        `;
    if (team.members[i].officeNumber) {
      draftHtml += `
            <p>${team.members[i].officeNumber}</p>
            `;
    }
    if (team.members[i].github) {
      draftHtml += `
            <p>GitHub: <a href="https://github.com/${team.members[i].github}">${team.members[i].github}</a></p>
            `;
    }
    if (team.members[i].school) {
      draftHtml += `
            <p>School: ${team.members[i].school}</p>
            `;
    }
    draftHtml += `
        </div>
        </div>
        `;
  }

  draftHtml += htmlTemplate.htmlEnding();

  fs.writeFile(`./output/${team.title}.html`, draftHtml, function (err) {});
}

async function runPrompt() {
  const title = await inquirer.prompt([
    {
      message:
        "Generate a custom team-members html for your team. Please enter a name for your team.",
      name: "teamName",
    },
  ]);
  team.title = title.teamName;
  console.log(
    "Your team is being created. Please start with adding a manager."
  );
  await addManager();
}

runPrompt();

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github_username) {
        super(name, id, email);
        super.role = "Engineer";
        this.github_username = github_username;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github_username;
    }
}
  
module.exports = Engineer;
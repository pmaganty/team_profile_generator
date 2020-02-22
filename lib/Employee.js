class Employee {
    constructor(name, id, email) {
      this.role = "employee";
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}
  
module.exports = Employee;
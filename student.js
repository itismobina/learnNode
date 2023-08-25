const Person = require("./person.js");

class Student extends Person {
    constructor () {
        super();
        this.sutdentId = 0;
        this.level = 0;
    }
}

module.exports = Student;
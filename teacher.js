const Person = require("./person.js");

class Teacher extends Person {
    constructor () {
        super();
        this.teacherId = 0;
    }
}

module.exports = Teacher;
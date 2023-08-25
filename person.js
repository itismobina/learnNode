class Person {
    constructor () {
        this.name = "";
        this.family = "";
        this.gender = "";
        this.mobile = "";
    }

    setName (newName) {
      this.name = newName;
    }

    setFamily (newFamily) {
        this.family = newFamily;
    }

    printName () {
        console.log(this.name);
        console.log(this.family);
    }
}

module.exports = Person;
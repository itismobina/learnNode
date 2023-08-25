const Person = require("./person.js");
let person = new Person();
person.name = "ali";
person.family = "helo";
person.gender = "female";
person.printName();
person.setName("hossein","abcd");
person.setFamily("abcd");
person.printName();
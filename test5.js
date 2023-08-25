const express = require("express");
const Student = require("./student.js");
const app = express();

let student1 = new Student();
student1.name = "ali";

let student2 = new Student();
student2.name = "hassan";

let student3 = new Student();
student3.name = "hassanAli";

let student4 = new Student();
student4.name = "gholam";

let student5 = new Student();
student5.name = "gholamReza";

let students = [student1, student2, student3, student4, student5];

function Search (searchkey) {
    let searchResult= [];
    for (let index = 0; index < students.length; index++) {
        if(students[index].name.toLowerCase().includes(searchkey.toLowerCase())) {
           searchResult.push(students[index].name);
        }
    }
    return searchResult;
}

app.get("/", (req, res) => {
    let result =  Search("gh");
    let text = "";
    result.forEach((e) => {
        text += "<div>"+e+"</div>"
    })
    res.send(`<div>${text}</div>`);
});

app.listen(3000,() => {
    console.log("start");
})



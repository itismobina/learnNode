const ExamResult = require("./exam.js");
const Student = require("./student.js");

let student1 = new Student();
let examResult1 = new ExamResult()
examResult1.studentId = 1;
student1.name = "ali";
student1.studentId = 1;
examResult1.grade = 18;

let student2 = new Student();
let examResult2 = new ExamResult()
examResult2.studentId = 2;
student2.studentId = 2;
student2.name = "hossein";
examResult2.grade = 14;

let student3 = new Student();
let examResult3 = new ExamResult()
examResult3.studentId = 3;
student3.studentId = 3;
student3.name = "hassan";
examResult3.grade = 20;

let students = [student1, student2, student3];
let exams = [examResult1, examResult2, examResult3];
let max = 0;
let id;

for (let index = 0; index < exams.length; index++) {
    max = exams[0].grade;
    if(max < exams[index].grade) {
        max = exams[index].grade;
        id = exams[index].studentId;
    }
}

for (let j = 0; j < students.length; j++) {
    if(id == students[j].studentId) {
        console.log(students[j].printName());
    }
}

console.log(max + " ");

let exam = new ExamResult();
exam.grade = "18";
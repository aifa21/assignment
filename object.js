var student={id:34,phone:0394034,name:"aifa"};
console.log(student);
var phoneno=student.phone;
console.log(phoneno);
var nam=student["id"];
console.log(nam);
var nam1="id";
var nam2=student[nam1];
console.log(nam2);
//update 3 ways
student.phone=999;
console.log(student);
student["phone"]=888;
console.log(student);
student[nam1]=333;
console.log(student);
//add new value
student.movie="raone";
console.log(student);


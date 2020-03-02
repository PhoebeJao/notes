class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}

let p = new Person("Juan Dela Cruz");
let s = new Student("Pedro Morales", "IT");

document.write(`Hello ${p.name}!<br><br>`);

p = s;
document.write(`Hello ${p.name}!<br><br>`);


document.write(typeof(s) + "<br><br>");

s= 1;
document.write(typeof(s) + "<br><br>");
document.write(s + "<br><br><br>");

try{
    sayHello();
}catch(err) {
    document.write(err.message + "<br><br>");
}finally {
    document.write("inside the finally block");
}
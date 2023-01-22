"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName(name) {
        return name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCources(cources) {
        this.courses.push(cources);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(courses) {
        this.courses.push(courses);
    }
}
class Course {
    constructor(courseId, courseName) {
        this.students = [];
        this.courseId = courseId;
        this.courseName = courseName;
    }
    addStudents(student) {
        this.students.push(student);
        student.registerForCources(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(courses) {
        this.courses.push(courses);
    }
}
const student1 = new Student("ali", 26, "PIAIC-23423");
const instructor1 = new Instructor("Zia Khan", 70, 2000000);
// instructor1.assignCourse(course1);
const course1 = new Course("PIAIC-101", "Web 3.0 & MetaVerse");
const course2 = new Course("PIAIC-201", "Cloud Native Computing");
course1.addStudents(student1);
course1.setInstructor(instructor1);
const department = new Department("Computer Science");
department.addCourse(course1);
department.addCourse(course2);
// console.log(student1);
// console.log(instructor1);
// console.log(course1);
// console.log(department.courses);

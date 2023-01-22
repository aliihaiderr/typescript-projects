class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(name: string) {
    return name;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];
  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }
  registerForCources(cources: Course) {
    this.courses.push(cources);
  }
}

class Instructor extends Person {
  private salary: number;
  courses: Course[] = [];
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assignCourse(courses: Course) {
    this.courses.push(courses);
  }
}

class Course {
  courseId: string;
  courseName: string;
  students: Student[] = [];
  instructor!: Instructor;

  constructor(courseId: string, courseName: string) {
    this.courseId = courseId;
    this.courseName = courseName;
  }
  addStudents(student: Student) {
    this.students.push(student);
    student.registerForCources(this);
  }
  setInstructor(instructor: Instructor) {
    this.instructor = instructor;
    instructor.assignCourse(this);
  }
}

class Department {
  name: string;
  courses: Course[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addCourse(courses: Course) {
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

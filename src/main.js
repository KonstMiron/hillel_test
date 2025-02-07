// Homework 14
class Student {
  constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.courses = new Map();
  }

  addCourse(course) {
      if (!this.courses.has(course)) {
          this.courses.set(course, { grades: [], attendance: [] });
      }
  }

  removeCourse(course) {
      this.courses.delete(course);
  }

  addGrade(course, grade) {
      if (this.courses.has(course) && grade >= 0 && grade <= 100) {
          this.courses.get(course).grades.push(grade);
      } else {
          console.log("Невірні дані або курс не знайдено.");
      }
  }

  addAttendance(course, attended) {
      if (this.courses.has(course) && typeof attended === "boolean") {
          this.courses.get(course).attendance.push(attended);
      } else {
          console.log("Невірні дані або курс не знайдено.");
      }
  }

  getAverageGrade(course) {
      if (!this.courses.has(course) || this.courses.get(course).grades.length === 0) return 0;
      const sum = this.courses.get(course).grades.reduce((acc, val) => acc + val, 0);
      return sum / this.courses.get(course).grades.length;
  }

  getAverageAttendance(course) {
      if (!this.courses.has(course) || this.courses.get(course).attendance.length === 0) return 0;
      const attendedClasses = this.courses.get(course).attendance.filter(a => a).length;
      return attendedClasses / this.courses.get(course).attendance.length;
  }

  getCompletedClasses(course) {
      return this.courses.has(course) ? this.courses.get(course).attendance.length : 0;
  }

  getStudentInfo() {
      let info = `Студент: ${this.firstName} ${this.lastName}\nРік народження: ${this.birthYear}\nКурси:\n`;
      this.courses.forEach((data, course) => {
          info += `  ${course}: Середня оцінка: ${this.getAverageGrade(course).toFixed(2)}, Середнє відвідування: ${(this.getAverageAttendance(course) * 100).toFixed(2)}%, Пройдені заняття: ${this.getCompletedClasses(course)}\n`;
      });
      return info;
  }
}

class Group {
  constructor() {
      this.students = [];
  }

  addStudent(student) {
      this.students.push(student);
  }

  removeStudent(student) {
      this.students = this.students.filter(s => s !== student);
  }

  getStudentRankingByGrade(course) {
      return this.students
          .map(student => ({ student, averageGrade: student.getAverageGrade(course) }))
          .sort((a, b) => b.averageGrade - a.averageGrade);
  }

  getStudentRankingByAttendance(course) {
      return this.students
          .map(student => ({ student, averageAttendance: student.getAverageAttendance(course) }))
          .sort((a, b) => b.averageAttendance - a.averageAttendance);
  }
}

const student1 = new Student("Іван", "Петренко", 2002);
const student2 = new Student("Марія", "Іваненко", 2003);

student1.addCourse("Математика");
student1.addGrade("Математика", 85);
student1.addGrade("Математика", 90);
student1.addAttendance("Математика", true);
student1.addAttendance("Математика", false);

student2.addCourse("Математика");
student2.addGrade("Математика", 92);
student2.addGrade("Математика", 88);
student2.addAttendance("Математика", true);
student2.addAttendance("Математика", true);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);

console.log(student1.getStudentInfo());
console.log(group.getStudentRankingByGrade("Математика"));
console.log(group.getStudentRankingByAttendance("Математика"));

export default function getStudentsByLocation(Student, city) {
    return Student.filter((element) => element.location === city);
  }

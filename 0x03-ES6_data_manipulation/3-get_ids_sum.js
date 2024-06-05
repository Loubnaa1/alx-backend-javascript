export default function getStudentIdsSum(Student) {
    return Student.reduce((sum, element) => sum + element.id, 0);
  }

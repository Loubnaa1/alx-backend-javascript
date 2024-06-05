export default function updateStudentGradeByCity(Student, city, newGrades) {
    const grades = newGrades.reduce((arr, obj) => ({
      ...arr,
      [obj.studentId]: obj.grade,
    }), {});
    const etd = Student.filter((element) => element.location === city).map((etud) => ({
      ...etud,
      grade: grades[etud.id] || 'N/A',
    }));
    return etd;
  }

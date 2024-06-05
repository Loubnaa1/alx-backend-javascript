export default function getListStudentIds(Student) {
    if (!Array.isArray(Student)) {
      return [];
    }
  
    const listId = Student.map((element) => element.id);
    return listId;
  }

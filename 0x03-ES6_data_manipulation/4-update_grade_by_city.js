export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsCity = studentList.filter((student) => student.location === city);
  const studentsGraded = studentsCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const newGrade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade: newGrade };
  });

  return studentsGraded;
}

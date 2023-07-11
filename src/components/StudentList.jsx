function StudentList() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="list">
      <h2>Student List</h2>
      {students.map((student, index) => {
        return <p key={index}> {student} </p>;
      })}
    </div>
  );
}

export default StudentList;

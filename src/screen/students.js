import { useEffect, useState } from "react";
import { getData } from "../config/firebasemethods";

function StudentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData("students")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Student List</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Section</th>
          <th>CNIC</th>
          <th>Contact</th>
          <th>Father Name</th>
          <th>Father Contact</th>
          <th>Father CNIC</th>
          <th>Emergency Contact</th>
        </tr>
        <tbody>
          {data && data.length > 0
            ? data.map((x) => (
                <tr>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.sec}</td>
                  <td>{x.cnic}</td>
                  <td>{x.contact}</td>
                  <td>{x.fatherName}</td>
                  <td>{x.fatherContact}</td>
                  <td>{x.fatherCnic}</td>
                  <td>{x.emergencyContact}</td>
                </tr>
              ))
            : "No Students are Registered!"}
        </tbody>
      </table>
    </>
  );
}
export default StudentList;

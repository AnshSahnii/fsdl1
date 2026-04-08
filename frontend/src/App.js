import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
    contact: "",
    password: ""
  });
  const [editId, setEditId] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`http://localhost:5000/students/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/students", form);
    }

    setForm({
      firstName: "",
      lastName: "",
      rollNo: "",
      contact: "",
      password: ""
    });

    fetchStudents();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditId(student._id);
  };

  return (
    <div className="container">
      <h1>🎓 Student Management System</h1>

      <div className="card">
        <input placeholder="First Name"
          value={form.firstName}
          onChange={e => setForm({...form, firstName: e.target.value})}/>

        <input placeholder="Last Name"
          value={form.lastName}
          onChange={e => setForm({...form, lastName: e.target.value})}/>

        <input placeholder="Roll No"
          value={form.rollNo}
          onChange={e => setForm({...form, rollNo: e.target.value})}/>

        <input placeholder="Contact"
          value={form.contact}
          onChange={e => setForm({...form, contact: e.target.value})}/>

        <input type="password" placeholder="Password"
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}/>

        <br />

        <button className="add" onClick={handleSubmit}>
          {editId ? "Update Student" : "Add Student"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.firstName} {s.lastName}</td>
              <td>{s.rollNo}</td>
              <td>{s.contact}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(s)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
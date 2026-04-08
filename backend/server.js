const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sahniansh1332004_db_user:prbFqhaoohCgAz5k@cluster0.vdymxzw.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
  rollNo: String,
  contact: String,
  password: String
});

// CREATE
app.post("/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// READ
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
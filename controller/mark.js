// controllers/markController.js
const Mark = require('../models/MarksSchema');

// Add marks for a student
addMarks = async (req, res) => {
  try {
    const newMark = new Mark({
      student: req.params.id,
      class: req.params.classId,
      course: req.params.courseId,
      teacher: req.body.teacher,
      mark: req.body.mark
    });
    const mark = await newMark.save();
    res.status(201).json(mark);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get marks for a student in a specific class and course
getMarks = async (req, res) => {
  try {
    const marks = await Mark.find({
      student: req.params.id,
      class: req.params.classId,
      course: req.params.courseId
    }).populate('teacher');
    res.json(marks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    addMarks,
    getMarks
    
}
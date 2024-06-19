// models/Mark.js
const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'students', required: true },
  classIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'class' }],
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'teachers', required: true },
  mark: { type: Number, required: true },
});

module.exports = mongoose.model('Mark', MarkSchema);

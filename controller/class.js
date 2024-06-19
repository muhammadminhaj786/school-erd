// controllers/classController.js
const ClassSchema = require("../models/ClassSchema")

// Create a new class
const createClass = async (req, res) => {
  try {
    const newClass = new ClassSchema(req.body);
    const classObj = await newClass.save();
    res.status(201).json(classObj);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all classes
const getClasses = async (req, res) => {
  try {
    const classes = await ClassSchema.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a class by ID
const getClassById = async (req, res) => {
  try {
    const classObj = await ClassSchema.findById(req.params.id);
    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    res.json(classObj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a class
const updateClass = async (req, res) => {
  try {
    const updatedClass = await ClassSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClass) return res.status(404).json({ message: 'Class not found' });
    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a class
const deleteClass = async (req, res) => {
  try {
    const classObj = await ClassSchema.findByIdAndDelete(req.params.id);
    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    res.json({ message: 'Class deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
    createClass,
    getClasses,
    getClassById,
    updateClass,
    deleteClass
}
const express = require('express')
const { createStudent, getStudent, updateStudent, delStudent } = require('../controller/student')
const { createTeacher, getTeacher, updateTeacher, delTeacher } = require('../controller/teacher')
const { createClass, getClasses, getClassById, deleteClass, updateClass } = require('../controller/class')
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controller/course')
const { addMarks, getMarks } = require('../controller/mark')
const router = express.Router()


//students api
router.post('/api/createstudent', createStudent)
router.get('/api/getstudent', getStudent)
router.put('/api/updatestudent/:id',updateStudent)
router.delete('/api/delstudent/:id',delStudent)

//teacher api
router.post('/api/createTeacher', createTeacher)
router.get('/api/getTeacher', getTeacher)
router.put('/api/updateTeacher/:id',updateTeacher)
router.delete('/api/delTeacher/:id',delTeacher)

//class api
router.post('/api/createClass', createClass);
router.get('/api/getClass', getClasses);
router.get('/api/sigleClass:id', getClassById);
router.put('/api/updateClass/:id', updateClass);
router.delete('/api/deleteClass/:id',deleteClass);

//course api
router.post('/api/createCourse', createCourse);
router.get('/api/getCourse', getCourses);
router.get('/api/sigleCourse:id', getCourseById);
router.put('/api/updateCourse/:id', updateCourse);
router.delete('/api/deleteCourse/:id',deleteCourse);

//marks api
router.post('/students/:id/classes/:classId/courses/:courseId/marks', addMarks);
router.get('/students/:id/classes/:classId/courses/:courseId/marks', getMarks);


module.exports = router
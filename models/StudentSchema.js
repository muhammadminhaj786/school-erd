const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    classIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'class' }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
})

module.exports = mongoose.model('students', studentSchema)
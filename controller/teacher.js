const TeacherSchema = require("../models/TeacherSchema")



// create teacher controller
const createTeacher = async (req,res) => {
    
    //add try catch for error handling
    try {

        const {name, email} = req.body
        // console.log(name, email)
        const objToSend = {
            name,
            email

        }

        const teacherSave = await TeacherSchema.create(objToSend)
        res.status(200).json({
            status: true,
            message: 'teacher add successfuly',
            data :teacherSave
        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

//get teachers controller
const getTeacher = async (req,res)=>{

    try {

        const teacherRec = await TeacherSchema.find({})
        res.status(200).json({
            status: true,
            message: 'get all teachers sucessfully',
            data: teacherRec
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

//update teachers controller
const updateTeacher = async (req,res)=>{

    try {

        const {id} = req.params
        const body = req.body
        const teacherRec = await TeacherSchema.findByIdAndUpdate(id, body)
        res.status(200).json({
            status: true,
            message: 'teachers record update sucessfully',
            data: teacherRec
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

const delTeacher = async (req,res)=>{

    try {

        const {id} = req.params
        const delStuRec = await TeacherSchema.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: 'teachers record delete',
            data: delStuRec
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }
}


module.exports = {
    createTeacher,
    getTeacher,
    updateTeacher,
    delTeacher
}
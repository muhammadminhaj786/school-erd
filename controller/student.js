const StudentSchema = require("../models/StudentSchema")


// create student controller
const createStudent = async (req,res) => {
    
    //add try catch for error handling
    try {

        const {name, email, classIds, courses} = req.body
        // console.log(name, email)
        const objToSend = {
            name,
            email,
            classIds,
            courses

        }

        const studentSave = await StudentSchema.create(objToSend)
        res.status(200).json({
            status: true,
            message: 'student add successfuly',
            data :studentSave
        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

//get students controller
const getStudent = async (req,res)=>{

    try {

        const studentRec = await StudentSchema.find({}).populate('classIds').populate('courses')
        res.status(200).json({
            status: true,
            message: 'get all students sucessfully',
            data: studentRec
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

//update students controller
const updateStudent = async (req,res)=>{

    try {

        const {id} = req.params
        const body = req.body
        const studentRec = await StudentSchema.findByIdAndUpdate(id, body)
        res.status(200).json({
            status: true,
            message: 'students record update sucessfully',
            data: studentRec
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: null
        })
    }
}

const delStudent = async (req,res)=>{

    try {

        const {id} = req.params
        const delStuRec = await StudentSchema.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: 'students record delete',
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
    createStudent,
    getStudent,
    updateStudent,
    delStudent
}
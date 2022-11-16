import {Request, Response} from "express";
import {Student} from "../model/student";

class StudentController {
    getAll = async (req: Request, res: Response) => {
        let students = await Student.find();
        return res.status(200).json(students);
    }
    addStudent = async (req: Request, res: Response) => {
        console.log(req.body)
        await Student.insertMany(req.body);
        return res.status(201).json({
            message: "ok"
        });
    }
    findOne = async (req: Request, res: Response) => {
        let student = await Student.find({_id: req.params.id})
        return res.status(201).json(student)
    }
    deleteById = async (req: Request, res: Response) => {
        await Student.deleteMany({_id: req.params.id})
        return res.status(201).json({
            message: "delete done"
        });
    }
    update = async (req: Request, res: Response) => {
        await Student.updateMany({_id: req.params.id}, {$set: {age: 5000}})
        return res.status(201).json({
            message: "update done"
        });
    }

}

export default new StudentController();
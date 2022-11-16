"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../model/student");
class StudentController {
    constructor() {
        this.getAll = async (req, res) => {
            let students = await student_1.Student.find();
            return res.status(200).json(students);
        };
        this.addStudent = async (req, res) => {
            console.log(req.body);
            await student_1.Student.insertMany(req.body);
            return res.status(201).json({
                message: "ok"
            });
        };
        this.findOne = async (req, res) => {
            let student = await student_1.Student.find({ _id: req.params.id });
            return res.status(201).json(student);
        };
        this.deleteById = async (req, res) => {
            await student_1.Student.deleteMany({ sex: 'female' });
            return res.status(201).json({
                message: "delete done"
            });
        };
        this.update = async (req, res) => {
            await student_1.Student.updateMany({ _id: req.params.id }, { $set: { age: 5000 } });
            return res.status(201).json({
                message: "update done"
            });
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student-controller.js.map
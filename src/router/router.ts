import {Router} from "express";
import studentController from "../controller/student-controller";

export const router = Router();
router.get('', studentController.getAll);
router.get('/students/:id', studentController.findOne);
router.post('/students/add', studentController.addStudent);
router.delete('/students/delete/:id', studentController.deleteById);
router.put('/students/update/:id', studentController.update);


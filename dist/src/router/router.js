"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const student_controller_1 = __importDefault(require("../controller/student-controller"));
exports.router = (0, express_1.Router)();
exports.router.get('', student_controller_1.default.getAll);
exports.router.get('/students/:id', student_controller_1.default.findOne);
exports.router.post('/students/add', student_controller_1.default.addStudent);
exports.router.delete('/students/delete/:id', student_controller_1.default.deleteById);
exports.router.put('/students/update/:id', student_controller_1.default.update);
//# sourceMappingURL=router.js.map
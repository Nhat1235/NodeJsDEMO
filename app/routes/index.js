import express from "express";
import Model from '../model/model.js';
import { addEmployee, deleteById, findById, getAllEmployee, update, validation } from "../controllers/Employee.js";

const router = express.Router(); 

//REST APIS: 
//POST
router.post('/post', validation, (req, res) => addEmployee(req,res)); 

//Get all Method
router.get('/getAll', (req, res) => getAllEmployee(req,res));

//Get by ID Method
router.get('/getOne/:id', (req, res) => findById(req, res));

//Update by ID Method
router.patch('/update/:id', validation, (req, res) => update(req, res));

//Delete by ID Method
router.delete('/delete/:id', (req, res) => deleteById(req, res));

module.exports = router;
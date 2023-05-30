import Data from '../model/model';
const { check } = require('express-validator');

export const validation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('age', 'Age is required').not().isEmpty(),
]

export const addEmployee = async (req, res) => {
    const { name, age } = req.body;
    try {
        let data = new Data({ name, age })
        await data.save();
        res.status(200).json({ status: 200, message: "Add successfully", data });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllEmployee = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json({ status: 200, message: "Get All", data });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const findById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.status(200).json({ status: 200, message: "Found", data });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Data.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(200).json({ status: 200, message: "Update sucessful", result });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Data.findByIdAndDelete(id);
        res.status(200).json({ status: 200, message: "Deleted", data });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


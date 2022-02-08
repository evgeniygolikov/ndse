const {tasksService} = require('../services');

const getAllTasks = (req, res) => {
    res.json(tasksService.getAllTasks());
};

const getTask = (req, res) => {
    const {id} = req.params;
    const task = tasksService.getTask({id});

    if (task) {
        res.json(task);
    } else {
        res.status(404).json('tasks | not_found');
    }
};

const createTask = (req, res) => {
    const {title, text} = req.body;

    res.status(201).json(tasksService.createTask({title, text}));
};

const updateTask = (req, res) => {
    const {id} = req.params;
    const {title, text} = req.body;
    const task = tasksService.updateTask({id, title, text});

    if (task) {
        res.json(task);
    } else {
        res.status(404).json('tasks | not_found');
    }
};

const deleteTask = (req, res) => {
    const {id} = req.params;
    const success = tasksService.deleteTask({id});

    if (success) {
        res.json(success);
    } else {
        res.status(404).json('tasks | not_found');
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
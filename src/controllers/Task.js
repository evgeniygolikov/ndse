const {Task} = require('../models');
const {NotFoundError} = require('../errors');

const store = {
    tasks: [],
};

Array.from({length: 10}, (_, index) => {
    store.tasks.push(new Task(`Task ${index}`, `Text ${index}`));
});

const getAllTasks = (req, res) => {
    res.json({success: true, data: store.tasks});
};

const getTask = (req, res) => {
    const data = store.tasks.find(task => task.id === req.params.id);

    if (data) {
        res.json({success: true, data});
    } else {
        res.status(404).json({
            success: false,
            error: new NotFoundError(),
        });
    }
};

const createTask = (req, res) => {
    const data = new Task(req.body.title, req.body.text);

    store.tasks.push(data);

    res.status(201).json({success: true, data});
};

const updateTask = (req, res) => {
    const data = store.tasks.find(task => task.id === req.params.id);

    if (data) {
        Object.assign(data, {title: req.body.title, text: req.body.text});
        res.json({success: true, data});
    } else {
        res.status(404).json({
            success: false,
            error: new NotFoundError(),
        });
    }
};

const deleteTask = (req, res) => {
    const taskIndex = store.tasks.findIndex(task => task.id === req.params.id);

    if (taskIndex !== -1) {
        store.tasks.splice(taskIndex, 1);
        res.json({success: true, data: null});
    } else {
        res.status(404).json({
            success: false,
            error: new NotFoundError(),
        });
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
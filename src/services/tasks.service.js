const {Task} = require('../models');

const store = {
    tasks: [
        new Task('Start NodeJS course', 'Do it!'),
        new Task('Continue course', 'Do it!'),
        new Task('End it', 'Be happy!'),
    ],
};

const getAllTasks = () => {
    return store.tasks;
};

const getTask = ({id} = {}) => {
    return store.tasks.find(task => task.id === id);
};

const createTask = ({title = '', text = ''} = {}) => {
    const task = new Task(title, text);

    store.tasks.push(task);

    return task;
};

const updateTask = ({id, title, text} = {}) => {
    const task = store.tasks.find(task => task.id === id);

    if (task) {
        Object.assign(task, {title, text});
    }

    return task;
};

const deleteTask = ({id} = {}) => {
    const taskIndex = store.tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        store.tasks.splice(taskIndex, 1);

        return true;
    }

    return false;
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
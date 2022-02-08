const {Router} = require('express');

const {fileHandler} = require('../middlewares');
const {tasksController} = require('../controllers');

const router = Router();

router.get('/tasks/error', () => {
    throw new Error('Something bad happened!');
});

router.route('/tasks')
    .get(tasksController.getAllTasks)
    .post(tasksController.createTask);

router.route('/tasks/:id')
    .get(tasksController.getTask)
    .put(tasksController.updateTask)
    .delete(tasksController.deleteTask);

router.post(
    '/tasks/upload-img',
    fileHandler.single('cover-img'),
    (req, res) => {
        res.json(req.file?.path ?? null);
    }
);

router.get('/tasks/:id/download-img', (req, res) => {
    res.download(`${__dirname}/../../public/img/demo.png`, 'cover.png', err => {
        if (err) {
            res.status(404).json('404 | not_found');
        }
    });
});

module.exports = router;
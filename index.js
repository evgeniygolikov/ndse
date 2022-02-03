const express = require('express');
const cors = require('cors');

const {taskController} = require('./src/controllers');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get('/api/task', taskController.getAllTasks);
server.get('/api/task/:id', taskController.getTask);
server.post('/api/task', taskController.createTask);
server.put('/api/task/:id', taskController.updateTask);
server.delete('/api/task/:id', taskController.deleteTask);

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
   console.log(`Server is running, go to http://localhost:${PORT}`)
});
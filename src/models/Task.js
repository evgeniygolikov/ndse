const {generateUniqueId} = require('node-unique-id-generator');

class Task {
    constructor(title = '', text = '', id = generateUniqueId()) {
        this.title = title;
        this.text = text;
        this.id = id;
    }
}

module.exports = Task;
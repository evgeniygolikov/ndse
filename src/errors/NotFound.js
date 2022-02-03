class NotFoundError {
    constructor() {
        this.code = 404;
        this.type = 'NOT_FOUND';
        this.message = 'Requested resource does not exist.';
    }
}

module.exports = NotFoundError;
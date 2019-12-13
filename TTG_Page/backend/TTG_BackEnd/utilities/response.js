class Response {
    constructor(errorCode, message, data) {
        this.errorCode = errorCode;
        this.message = message;
        this.data = data;
    }
}

module.exports = Response;
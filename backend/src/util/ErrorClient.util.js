export class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // Getting and overwriting message property from Error class
        this.message = message;
        this.statusCode = statusCode;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor); // Do not include the lines before this, including this line, into the error stack.
    }
}

export class ValidationError extends AppError {
    constructor(message) {
        super(message, 400); // Overwriting message and status code
        this.name = 'Validation Error';
    }
}

export class AuthenticationError extends AppError {
    constructor(message) {
        super(message, 401);
        this.name = 'Authentication Error';
    }
}

export class AuthorizationError extends AppError {
    constructor(message = 'Access Denied') {
        super(message, 403);
        this.name = 'Authorization Error';
    }
}

export class NotFoundError extends AppError {
    constructor(message = 'Not Found') {
        super(message, 404);
        this.name = 'Not Found Error';
    }
}

export class ConflictError extends AppError {
    constructor(message) {
        super(message, 409);
        this.name = 'Conflict Error';
    }
}

export class InternalError extends AppError {
    constructor(message = 'Internal Server Error', statusCode = 500) {
        super(message, statusCode);
        this.name = 'Internal Error'
    }
}
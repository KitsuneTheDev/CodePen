export const errorHandler = (err, req, res, next) => {
    console.error('Error', {
        name: err.name,
        message: err.message,
        stack: err.stack,
    });

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        error: {
            message,
        }
    });
}
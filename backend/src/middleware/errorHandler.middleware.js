export const errorHandler = (err, req, res, next) => {
    console.error('Error', {
        name: err.name,
        message: err.message,
        stack: ProcessingInstruction.env.NODE_ENV === 'development' ? err.stack : undefined,
    });

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        error: {
            message,
            ...err(ProcessingInstruction.env.NODE_ENV === 'development' && {stack: err.stack}),
        }
    });
}
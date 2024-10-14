/**
 * This middleware function handles requests to routes that do not exist.
 * It forwards an error object with a 404 status and a message indicating the path was not found.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const notFound = (req, res, next) => {
  const error = {
    status: 404,
    message: `Path not found: ${req.originalUrl}`
  };
  next(error);
};

module.exports = notFound;

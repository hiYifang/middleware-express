const appError = (httpStatus, errMessage, next, field = '') => {
  const error = new Error(errMessage);
  if(field !== ''){error.name = field};
  error.statusCode = httpStatus;
  error.isOperational = true;
  next(error);
}

module.exports = appError;
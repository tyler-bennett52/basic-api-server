'use strict';

const validator = (req, res, next) => {
  if (req.query.name) {
    next();
  } else if (!req.query.name) {
    throw new Error('Name must be included in query string');
  }
};

module.exports = validator;
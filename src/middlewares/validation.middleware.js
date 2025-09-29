const { body, validationResult } = require("express-validator");

/**
 * Validation rules for Todo creation
 */
const validateTodoCreation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required.")
    .isString()
    .withMessage("Title must be a string."),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "done"])
    .withMessage("Status must be one of: pending | in-progress | done."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "Failure",
        errors: errors.array(),
      });
    }
    next();
  },
];

/**
 * Validation rules for Todo update
 */
const validateTodoUpdate = [
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a string."),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "done"])
    .withMessage("Status must be one of: pending | in-progress | done."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "Failure",
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = {
  validateTodoCreation,
  validateTodoUpdate,
};

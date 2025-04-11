const { z } = require('zod');

const todoSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string"
  }).min(1, "Title cannot be empty"),
  description: z.string().optional(),
  completed: z.boolean().optional()
});

const validateTodo = (req, res, next) => {
  try {
    const validatedData = todoSchema.parse(req.body);
    req.validatedData = validatedData;
    next();
  } catch (error) {
    if (error.errors) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid input data',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    }
    next(error);
  }
};

module.exports = validateTodo;

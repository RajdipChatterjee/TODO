const Todo = require('../models/todoModel');
const { ApiError } = require('../middleware/errorHandler');

// Get all todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      data: todos
    });
  } catch (error) {
    next(error);
  }
};

// Get single todo by ID
exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      throw new ApiError(404, 'Todo not found');
    }
    res.status(200).json({
      status: 'success',
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

// Create new todo
exports.createTodo = async (req, res, next) => {
  try {
    const newTodo = await Todo.create(req.validatedData);
    res.status(201).json({
      status: 'success',
      data: newTodo
    });
  } catch (error) {
    next(error);
  }
};

// Update todo
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.validatedData,
      { new: true, runValidators: true }
    );
    
    if (!todo) {
      throw new ApiError(404, 'Todo not found');
    }

    res.status(200).json({
      status: 'success',
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

// Delete todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    
    if (!todo) {
      throw new ApiError(404, 'Todo not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

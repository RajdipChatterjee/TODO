const express = require('express');
const router = express.Router();
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');
const validateTodo = require('../middleware/validateTodo');

// GET /api/todos - Get all todos
router.get('/', getTodos);

// GET /api/todos/:id - Get single todo
router.get('/:id', getTodoById);

// POST /api/todos - Create new todo
router.post('/', validateTodo, createTodo);

// PUT /api/todos/:id - Update todo
router.put('/:id', validateTodo, updateTodo);

// DELETE /api/todos/:id - Delete todo
router.delete('/:id', deleteTodo);

module.exports = router;

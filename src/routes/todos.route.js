const express = require('express');
const router = express.Router();

//* Controller Functions
const { createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById } = require('../controllers/todos.controller');

//* Middlewares Validations
const { validateTodoCreation, validateTodoUpdate } = require('../middlewares/validation.middleware');

//* Routes
router.post('/', validateTodoCreation, createTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.patch('/:id', validateTodoUpdate, updateTodoById);
router.delete('/:id', deleteTodoById);

module.exports = router;

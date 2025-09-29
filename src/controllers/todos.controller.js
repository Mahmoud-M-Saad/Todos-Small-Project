const todosService = require("../services/todo.service");
const timestamp = new Date().toISOString();
const ctx = "TODOS-CONTROLLER";

/**
 * Create Todo
 */
const createTodo = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const result = await todosService.createTodo({
      title,
      description,
      status,
    });

    if (!result.success) {
      return res.status(400).json({
        status: "Failure",
        message: result.error || "Failed to create todo.",
      });
    }

    return res.status(201).json({
      status: "Success",
      message: "Created successfully.",
      data: result.data,
    });
  } catch (err) {
    console.error(`[${timestamp} - ${ctx}] createTodo error:`, err.message);
    next(err);
  }
};

/**
 * Get all Todos with pagination and optional status filter
 */
const getAllTodos = async (req, res, next) => {
  try {
    const { page, limit, status } = req.query;
    const result = await todosService.getAllTodos({ page, limit, status });

    if (!result.success) {
      return res.status(500).json({
        status: "Failure",
        message: result.error || "Failed to fetch todos.",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Todos fetched successfully.",
      data: result.data.rows,
      total: result.data.count,
    });
  } catch (err) {
    console.error(`[${timestamp} - ${ctx}] getAllTodos error:`, err.message);
    next(err);
  }
};

/**
 * Get Todo by ID
 */
const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todosService.getTodoById(id);

    if (!result.success) {
      return res.status(404).json({
        status: "Failure",
        message: result.error || `Todo with id ${id} not found.`,
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Todo fetched successfully.",
      data: result.data,
    });
  } catch (err) {
    console.error(`[${timestamp} - ${ctx}] getTodoById error:`, err.message);
    next(err);
  }
};

/**
 * Update Todo by ID
 */
const updateTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todosService.updateTodoById(id, req.body);

    if (!result.success) {
      return res.status(404).json({
        status: "Failure",
        message: result.error || `Todo with id ${id} not found.`,
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Todo updated successfully.",
      data: result.data,
    });
  } catch (err) {
    console.error(`[${timestamp} - ${ctx}] updateTodoById error:`, err.message);
    next(err);
  }
};

/**
 * Delete Todo by ID
 */
const deleteTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todosService.deleteTodoById(id);

    if (!result.success) {
      return res.status(404).json({
        status: "Failure",
        message: result.error || `Todo with id ${id} not found.`,
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Todo deleted successfully.",
    });
  } catch (err) {
    console.error(`[${timestamp} - ${ctx}] deleteTodoById error:`, err.message);
    next(err);
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};

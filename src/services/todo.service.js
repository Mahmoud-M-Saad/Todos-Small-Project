const { Todo } = require("../models");
const timestamp = new Date().toISOString();
const ctx = "TODOS-SERVICE";

class TodoService {
  /**
   * Create a new Todo
   */
  async createTodo({ title, description, status }) {
    try {
      const todo = await Todo.create({ title, description, status });
      return { success: true, data: todo };
    } catch (error) {
      console.error(`[${timestamp} - ${ctx}] createTodo error:`, error.message);
      return { success: false, error: error.message };
    }
  }

  /**
   * Get all Todos with pagination and optional status filter
   */
  async getAllTodos({ page = 1, limit = 10, status }) {
    try {
      const where = {};
      if (status) where.status = status;

      const offset = (page - 1) * limit;

      const todos = await Todo.findAndCountAll({
        where,
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [["createdAt", "DESC"]],
      });

      return { success: true, data: todos };
    } catch (error) {
      console.error(
        `[${timestamp} - ${ctx}] getAllTodos error:`,
        error.message
      );
      return { success: false, error: error.message };
    }
  }

  /**
   * Get Todo by ID
   */
  async getTodoById(id) {
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) return { success: false, error: "Todo not found" };

      return { success: true, data: todo };
    } catch (error) {
      console.error(
        `[${timestamp} - ${ctx}] getTodoById error:`,
        error.message
      );
      return { success: false, error: error.message };
    }
  }

  /**
   * Update Todo by ID
   */
  async updateTodoById(id, data) {
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) return { success: false, error: "Todo not found" };

      await todo.update(data);
      return { success: true, data: todo };
    } catch (error) {
      console.error(
        `[${timestamp} - ${ctx}] updateTodoById error:`,
        error.message
      );
      return { success: false, error: error.message };
    }
  }

  /**
   * Delete Todo by ID
   */
  async deleteTodoById(id) {
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) return { success: false, error: "Todo not found" };

      await todo.destroy();
      return { success: true, data: true };
    } catch (error) {
      console.error(
        `[${timestamp} - ${ctx}] deleteTodoById error:`,
        error.message
      );
      return { success: false, error: error.message };
    }
  }
}

module.exports = new TodoService();

const express = require("express");
const bodyParser = require("body-parser");
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/error.middleware");
const db = require("./models");

const app = express();

//* Constant variables
const PORT = process.env.PORT || 5000;

//* Constant files
const todoRoutes = require("./routes/todos.route");

//* Middlewares
app.use(bodyParser.json());

//* Routes
app.use("/api/todos", todoRoutes);

//* Not found route handler
app.use(notFoundHandler);

//* Error handler middleware
app.use(errorHandler);

//* Sync database and start server
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced successfully.");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database sync error:", err);
  });

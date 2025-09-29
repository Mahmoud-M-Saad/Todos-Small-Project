# Todo API (Node.js + Express + Sequelize)

A production-ready **Todo API** built using **Node.js**, **Express**, and **Sequelize ORM**. This API provides a robust foundation for managing to-do items with full CRUD operations, data validation, error handling, and PostgreSQL database integration.

## 🌟 Features

- **RESTful API Architecture**
- **MVC Pattern Implementation**
- **PostgreSQL Database** with Sequelize ORM
- **Express Validator** for request validation
- **Error Handling Middleware**
- **Environment Variables** support
- **Development Mode** with Nodemon

## 🛠️ Tech Stack

- **Node.js** (v18+)
- **Express.js** (v5.1.0) - Web framework
- **Sequelize** (v6.37.7) - ORM for database operations
- **PostgreSQL** (via `pg` v8.16.3) - Database
- **Express Validator** (v7.2.1) - Request validation
- **dotenv** (v17.2.2) - Environment variables management
- **nodemon** (v3.1.10) - Development server
- **body-parser** (v2.2.0) - Request body parsing

## 📁 Project Structure

```
src/
├── controllers/
│   └── todos.controller.js    # Request handlers
├── middlewares/
│   ├── error.middleware.js    # Error handling
│   └── validation.middleware.js# Request validation
├── models/
│   ├── index.js              # Database connection
│   └── todos.model.js        # Todo model definition
├── routes/
│   └── todos.route.js        # API routes
├── services/
│   └── todo.service.js       # Business logic
└── app.js                    # Application entry point
```

## 🚀 API Endpoints

### Todos API Routes

| Method  | Endpoint   | Description        | Request Body                                               |
| ------- | ---------- | ------------------ | ---------------------------------------------------------- |
| POST    | /todos     | Create a new todo  | `{ title: string, description?: string }`                  |
| GET     | /todos     | Get all todos      | -                                                          |
| GET     | /todos/:id | Get todo by ID     | -                                                          |
| PATCH   | /todos/:id | Update todo by ID  | `{ title?: string, description?: string, status?: enum }`  |
| DELETE  | /todos/:id | Delete todo by ID  | -                                                          |

### Todo Model Schema

```JavaScript
{
  id: Integer (Primary Key, Auto-increment)
  title: String (Required)
  description: Text (Optional)
  status: Enum ['pending', 'in-progress', 'done'] (Default: 'pending')
 createdAt: DateTime
 updatedAt: DateTime
}
```

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
   git clone <repository-url>
   cd todo-api
```

2. **Install dependencies**

```bash
   npm install
```

3. **Environment Setup**
   Create a `.env` file in the root directory:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todos_db
DB_USER=your_username
DB_PASSWORD=your_password
```

4. **Database Setup**

- Ensure PostgreSQL is installed and running
     - Create a database named `todos_db`
     - The tables will be automatically created by Sequelize

5. **Start the Development Server**

```bash
   npm run dev
```

The server will start on `http://localhost:3000`

## 🔍 API Usage Examples

### Create a Todo

```bash
curl -X POST http://localhost:3000/todos \
 -H "Content-Type: application/json" \
  -d '{"title": "Complete project", "description": "Finish the TODO API project"}'
```

### Get All Todos

```bash
curl http://localhost:3000/todos
```

### Update a Todo

```bash
curl -X PATCH http://localhost:3000/todos/1 \
 -H "Content-Type: application/json" \
  -d '{"status": "done"}'
```

## 🧪 Validation Rules

- **Title**: Required, string, min 1 character
- **Description**: Optional, string
- **Status**: Optional, must be one of: 'pending', 'in-progress', 'done'

## 📝 Error Handling

The API implements centralised error handling with appropriate HTTP status codes:

- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## 🛠️ Development

To start the development server with hot-reload:

```bash
npm run dev
```

## 📄 Important Note:

This project was completed in almost 2 hours By Mahmoud Saad.

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Last updated: September 29, 2025

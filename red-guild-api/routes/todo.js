import express from 'express'
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.js"
import { validateTodo } from '../middlewares/validateTodo.js'

//create a router for the todo routes
const router = express.Router()

router.get("/", getAllTodos)
router.post("/add", addTodo)
router.put("/update/:id", validateTodo, updateTodo)
router.delete("/delete/:id", deleteTodo)

export default router
import dotenv from "dotenv"
import express from "express"
import todoRouter from "./routes/todo.js"
dotenv.config()
const app = express()
//body parser
app.use(express.json())

// define routers
app.use("/todo", todoRouter)


app.get("/ping", (req, res) => {
  res.send("pong")
})

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT)
})
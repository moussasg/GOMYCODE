import bodyParser from 'body-parser';
import dotenv from "dotenv";
import express from 'express';
//to use .env file
dotenv.config()

//init server
const app = express();
//to parse json in body
app.use(bodyParser.json())

// get method route on "/"
app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post("/", (req, res) => {
  const mymessage = req.body
  if (!mymessage.name) return res.status(400).json({ message: "name is required" })
  res.json({
    message: "hello",
    yourmessage: mymessage
  })
})

app.post("/:name", (req, res) => {
  try {
    const { name } = req.params
    if (!name) throw new Error("name is ")
    res.json({
      message: "hello",
      yourname: name
    })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
})

//listen on port 5000
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)

//post post delete put...
//folder structure
//separate routes and controllers
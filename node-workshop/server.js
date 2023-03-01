import dotenv from "dotenv"
import fs from "fs"
import http from "http"
import os from "os"
dotenv.config()

console.log(os.platform())

const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    res.end(data.toString())
  })
})
server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`)
})
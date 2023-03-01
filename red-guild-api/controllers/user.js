import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const users = []



export const getAllUser = async (req, res) => {
  try {
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({
      location: "error in the controller getAllUser",
      message: error.message
    })
  }
}

export const addUser = async (req, res) => {
  const user = req.body
  try {
    const isFound = users.find(user => user.email === req.body.email)
    if (isFound) return res.status(400).json({ message: "user already exists" })
    //without await
    const hashedpassword = await bcrypt.hash(req.body.password, 10)
    const newUser = {
      ...user,
      password: hashedpassword,
    }
    users.push(newUser)
    const { password, ...rest } = newUser
    jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "14 days" }, (err, token) => {
      if (err) return res.status(500).json({ message: "error in the token" })
      res.status(200).json({ token, user: rest })
    })
  } catch (error) {
    res.status(500).json({
      location: "error in the controller addUser",
      message: error.message
    })
  }
}

export const login = async (req, res) => {
  const { email } = req.body
  try {
    const user = users.find(user => user.email === email)
    if (!user) return res.status(400).json({ message: "user not found" })
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) return res.status(400).json({ message: "invalid password" })
    const { password, ...rest } = user
    jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "14 days" }, (err, token) => {
      if (err) return res.status(500).json({ message: "error in the token" })
      res.status(200).json({ token, user: rest })
    })
  } catch (error) {
    res.status(500).json({
      location: "error in the controller login",
      message: error.message
    })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const index = users.findIndex(user => user.id === id)
    if (index === -1) return res.status(400).json({ message: "id not found" })
    users.splice(index, 1)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({
      location: "error in the controller deleteUser",
      message: error.message
    })
  }
}
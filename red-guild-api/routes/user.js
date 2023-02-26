import express from 'express'
import { addUser, deleteUser, getAllUser, login } from '../controllers/user.js'

const router = express.Router()


router.get("/", getAllUser)
router.post("/login", login)
router.post("/signup", addUser)
//router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
// router.get("/:id", getUserById)
//router.get("/checktoken", islogged)
export default router
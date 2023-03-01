import { z } from "zod"

const todoschema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  desc: z.string().min(1)
})

export const validateTodo = (req, res, next) => {
  const { error } = todoschema.safeParse(req.body)
  if (error) {
    res.status(400).json({
      message: "invalid todo"
    })
  } else {
    next()
  }
}
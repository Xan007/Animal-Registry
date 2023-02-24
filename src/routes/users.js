import { Router } from "express"

const router = Router()

router.get("/:id", (req, res) => {
    res.send("Hello World")
})

export default router
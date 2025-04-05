import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("this is the admin route")
})

export default router
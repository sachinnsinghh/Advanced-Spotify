import { Router } from "express";

const router =  Router()

router.get("/", (req, res) => {
    res.send("this si the stats router")
})

export default router
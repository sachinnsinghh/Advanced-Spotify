import { Router } from "express";
import { getAllSongs ,getFeaturedSongs,getMadeForYouSongs,getTrendingSongs} from "../controller/song.controller.js";
import { protectRoute , requireAdmin } from "../middleware/auth.middleware.js"
const router = Router()

router.get("/" , protectRoute, requireAdmin,   getAllSongs)
router.get("/featured" ,   getFeaturedSongs)
router.get("/made-for-you" ,   getMadeForYouSongs)
router.get("/trending" ,   getTrendingSongs)


// router.get("/" , protectRoute, requireAdmin,   getAllSongs)


export default router
import express from "express"
import dotenv from "dotenv"
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload"
import path, { dirname } from "path"
import { connectDB } from "./lib/db.js"

import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import songsRoutes from "./routes/songs.route.js"
import albumsRoutes from "./routes/album.route.js"
import statsRoutes from "./routes/stats.route.js"

dotenv.config()

const __dirname = path.resolve()
const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(clerkMiddleware()) //this will add auth to req obj => req.user
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir :path.join(__dirname, "tmp"),
    createParentPath:true,
    limits:{
        fileSize:10*1024*1024, //10MB max file size
    }
}))

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/songs", songsRoutes)
app.use("/api/albums", albumsRoutes)
app.use("/api/stats", statsRoutes)


//error handler
app.use((err, req, res, next) =>{
    res.status(500).json({
        message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB()
}
)
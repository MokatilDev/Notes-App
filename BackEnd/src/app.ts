import connectionWithDB from "./config/connectionDB"
import * as dotenv from "dotenv"
import express from "express"
dotenv.config()

// App
const app = express()

// Connection With Database
connectionWithDB()

// Listen App On Prot 8080
app.listen(process.env.PORT,() => {
    console.log("Listen on Port 8080")
})
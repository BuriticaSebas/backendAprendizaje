import express, { request, response } from "express"
import "dotenv/config.js"
import "./config/database.js"

const server = express()


const PORT = process.env.PORT || 8080


const ready = () => console.log("Server Melisimo: " , PORT)

server.get("/hola", (request, response) =>{
    response.send("HOla chao")
} )

server.listen(PORT, ready)






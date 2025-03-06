import express, { request, response } from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from 'morgan'
import routerMain from "./router/index.js"
import routerUsers from "./router/usersRoute.js"

const server = express()


const PORT = process.env.PORT || 8080


const ready = () => console.log("Server Melisimo: " , PORT)


//configuraciones basicas

//1- debes recibir datos complejos desde la url
server.use(express.urlencoded({extended:true}))
// aca le decimos que pueda intepretar formatos json
server.use(express.json())


//Cors es una libreria qeu se encarga de la seguridad basica de nuestra app
//Es una politica de seguridad de origenes cruzados,
server.use(cors())

//permite monitorear y depurar las interacciones entre clientes y el servidor de manera sencilla, generando logs con información como el método HTTP, la URL, el código de estado, el tiempo de respuesta, y más.

server.use(morgan('dev'))




//conectamos al enrutadot

server.use('/api',routerMain)
server.use('/api/users',routerUsers)


//escuchar
server.listen(PORT, ready)






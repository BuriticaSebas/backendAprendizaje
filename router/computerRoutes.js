import { Router } from "express";
import controlComputer from "../controllers/computers/read.js"

const routerComputer = Router()

routerComputer.get('/allComputers', controlComputer)

export default routerComputer
import { Router } from "express";
import controlMotorcycle from "../controllers/motorcycles/read.js"

const routerMotorcycle = Router()

routerMotorcycle.get('/allMotorcycles', controlMotorcycle)

export default routerMotorcycle
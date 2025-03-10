import { Router } from "express";
import controlBycicle from "../controllers/bycicles/read.js"

const routerBycicle = Router()


routerBycicle.get('/allBycicles', controlBycicle)

export default routerBycicle

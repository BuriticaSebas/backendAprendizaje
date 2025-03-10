import { Router } from "express";
import controlPhone from "../controllers/phones/read.js"

const routerPhone = Router()


routerPhone.get('/allPhones', controlPhone)

export default routerPhone
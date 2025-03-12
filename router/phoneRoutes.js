import { Router } from "express";
import {phonesByName, allPhones, phonesById} from "../controllers/phones/read.js"
import create from "../controllers/phones/create.js";

const routerPhone = Router()


routerPhone.get('/allPhones', allPhones)
routerPhone.get('/phonesname/:namePhone', phonesByName)
routerPhone.get('/phonesid/:idphone', phonesById)

routerPhone.post('/createPhone', create)


export default routerPhone
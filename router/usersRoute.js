import { Router } from "express";
import controlUser from '../controllers/users/read.js'



const routerUsers = Router()


routerUsers.get("/allUsers", controlUser )

export default routerUsers
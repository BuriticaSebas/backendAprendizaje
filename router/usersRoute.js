import { Router } from "express";
import {allUsers, usersByName} from '../controllers/users/read.js'



const routerUsers = Router()


routerUsers.get("/allUsers", allUsers )
routerUsers.get('/name', usersByName)

export default routerUsers
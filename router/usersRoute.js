import { Router } from "express";
import {allUsers, usersByName, usersById} from '../controllers/users/read.js'
import create from "../controllers/users/create.js";



const routerUsers = Router()


routerUsers.get('/allUsers',  allUsers )
routerUsers.get('/name/:nameParams', usersByName)
routerUsers.get('/nameId/:idQuery', usersById)
routerUsers.post('/usersCreate', create)

export default routerUsers
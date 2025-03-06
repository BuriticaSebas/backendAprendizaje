import {Router} from 'express'
import routerUsers from './usersRoute.js'

let routerMain = Router()
routerMain.use('/users', routerUsers)



export default routerMain

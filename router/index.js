import {Router} from 'express'
import routerUsers from './usersRoute.js'
import routerPhone from './phoneRoutes.js'
import routerMovie from './movieRoutes.js'
import routerMotorcycle from './motorcycleRoutes.js'
import routerComputer from './computerRoutes.js'
import routerBycicle from './bycicleRoutes.js'

let routerMain = Router()
routerMain.use('/users', routerUsers)
routerMain.use('/phones', routerPhone)
routerMain.use('/movies', routerMovie)
routerMain.use('/motorcycles', routerMotorcycle)
routerMain.use('/computers', routerComputer)
routerMain.use('/bycicles', routerBycicle)


export default routerMain

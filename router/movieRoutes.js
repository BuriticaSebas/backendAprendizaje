import { Router } from "express";
import controlMovie from "../controllers/movies/read.js"

const routerMovie = Router()

routerMovie.get('/allMovies', controlMovie)

export default routerMovie
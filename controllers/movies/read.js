import { request,response } from "express";
import Movies from "../../models/Movie.js"
let req = request
let res = response


let allMovies = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let alldata = await Movies.find();
    return res.status(200).json({ response: alldata });
  } catch (error) {
    return res.status(500).json({ response: error });
  }
};

export default allMovies
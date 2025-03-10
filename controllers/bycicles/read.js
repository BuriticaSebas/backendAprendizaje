import { request,response } from "express";
import Bycicle from "../../models/Bycicle.js"

let req = request
let res = response

let allbycicles = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let alldata = await Bycicle.find();
    return res.status(200).json({ response: alldata });
  } catch (error) {
    return res.status(500).json({ response: error });
  }
};

export default allbycicles
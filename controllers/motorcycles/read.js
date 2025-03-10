import { request,response } from "express";
import Motorcycle from "../../models/Motorcycle.js"

let req = request
let res = response


let allMotorcycle = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let alldata = await Motorcycle.find();
    return res.status(200).json({ response: alldata });

  } catch (error) {
    return res.status(500).json({ response: error });
  }
};

export default allMotorcycle
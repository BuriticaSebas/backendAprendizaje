import { request,response } from "express";
import Computers from "../../models/Computer.js"

let req = request
let res = response


let allComputers = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let alldata = await Computers.find();
    return res.status(200).json({ response: alldata });
  } catch (error) {
    return res.status(500).json({ response: error });
  }
};

export default allComputers
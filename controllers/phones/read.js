import { request, response } from "express";
import Phones from "../../models/Phone.js";

let req = request;
let res = response;

let allPhones = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let alldata = await Phones.find();
    return res.status(200).json({ response: alldata });
  } catch (error) {
    return res.status(500).json({ response: error });
  }
};


let phonesByName = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let nameQuery = req.params.namePhone

    let alldata = await Phones.find({name:nameQuery});
    return res.status(200).json({ response: alldata });

  } catch (error) {

    return res.status(500).json({ response: error });
  }
};


let phonesById = async (req, res, next) => {
  try {
    //Aqui obtengo los datos de la base de datos
    let idQuery = req.params.idPhone

    let alldata = await Phones.findById(idQuery)

    return res.status(200).json({ response: alldata });

  } catch (error) {

    return res.status(500).json({ response: error });
  }
};




export {phonesByName, allPhones, phonesById}

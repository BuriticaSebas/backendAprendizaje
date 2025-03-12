import { request, response } from "express";
import Phones from "../../models/Phone.js";

let req = request;
let res = response;

let create = async (req, res, next) => {
    
  try {
    let phoneInfo = req.body
    
    let createPhone = await Phones.insertMany(phoneInfo);

    return res.status(201).json({
      response: createPhone,
    });
  } catch (error) {
    return res.status(500).json({
      response: error,
    });
  }
};

export default create;

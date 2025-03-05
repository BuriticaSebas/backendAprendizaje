import { Schema, model } from "mongoose";

let collection = "motorycles"

let schema = Schema(
    {
        brand: {type: String, required:true},
        model: {type: String, required:true},
        trnasmission: {type: String, required:true},
        year: {type: String, required:true},
        brakes: {type: String, required:true},
    
    },{
        timestamps:true
    }
)

let motorcycle = model(collection,schema)

export default motorcycle
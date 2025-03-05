import { Schema,model } from "mongoose";

let collection = "bicycle"

let schema = Schema(
    {
        brand: {type:String, required: true},
        model: {type:String, required: true},
        type: {type:String, required: true},
        frameMaterial: {type:String, required: true},
    },{
        timestamps:true
    }
)

let bycycle = model(collection,schema)

export default bycycle


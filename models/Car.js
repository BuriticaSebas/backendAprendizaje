import { Schema,model } from "mongoose";

let collection = "cars"

let schema = Schema({

    name: {type:String, required:true},
    color: {type:String, required:true},
    model:{type: Number, required:true}
},{
    timestamps:true
})

let car = model(collection,schema)

export default car


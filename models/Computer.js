import { Schema, model } from "mongoose";

let collection = "computers"

let schema = Schema(
    {
        nameDevice:{type:String, required: true},
        model: {type:String , required: true},
        brand: {type: String, required: true},
        RAM: {type:String , required: true},
        storage: {type: Array, required: true},
        proccesor: {type: Object, required: true},
        SO: {type:Object, required: true}

    },{
        timestamps:true 
    }
)


let computer = model(collection,schema)

export default computer
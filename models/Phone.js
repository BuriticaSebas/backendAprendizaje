import { Schema,model } from "mongoose";


let collection = "phones"

let schema = Schema(
    {
        name: {type:String, require:true},
        brand:{type:String, required:true},
        color:{type: String, required: true}
    },{
        timestamps:true
    }
)


let phone = model(collection,schema)

export default phone



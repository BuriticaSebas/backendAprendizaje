import {Schema,model} from "mongoose";        

let collection = 'users'

let schema = Schema({
    //estructura del modelo
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    photo: {type:String, required:true},
    role: {type:Number, required:true}, 
},{
    //propiedades de mongo 
    timestamps:true
})

let User = model(collection,schema)


export default User




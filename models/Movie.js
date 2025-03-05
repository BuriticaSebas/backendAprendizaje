import { Schema,model } from "mongoose";

let collection = "movies"

let schema = Schema(
    {
        title:{type:String},
        year: {type: Number, required: true},
        cast: {type:Array,required: true},
        awards:{type: Object,required:true},
        streaming: {type: Array , required:true},
        gender:{type:String, required:true}
    }
)




let movie = model(collection,schema)

export default movie

/**
 * 
 * Crear 5 modelos (Tema libre), deben tener un numero minimo de propiedades como se ve acontinuacion:

modelo 2 - 4 propiedades
modelo 3 - 5 propiedades


y llena los modelos con información generada por IA, 15 registros por modelo
 */
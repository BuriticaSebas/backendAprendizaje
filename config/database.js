import mongoose from "mongoose";

const url = process.env.URI_MONGO
console.log(url)
//utilizamos connect de mongoose

mongoose.connect(url)
.then(() => console.log("conexion mela"))
.catch(error => console.log(error))




import mongoose from "mongoose";

const url = process.env.URI_MONGO
console.log(url)
//utilizamos connect de mongoose



//conexion asincrona
mongoose.connect(url)
.then(() => console.log("conexion mela"))
.catch(error => console.log(error))


//conexion sincrona
// async function connectDB(){
//    try {

//     await mongoose.connect(process.env.URI_MONGO)
//     console.log("conexion mela")
    
//    } catch (error) {
//       console.log(error)
//    }
// }

// connectDB()


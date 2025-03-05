import "dotenv/config.js";
import "./config/database.js";

// Importamos todos los modelos
import Computer from "./models/Computer.js";
import Phone from "./models/Phone.js";
import Car from "./models/Car.js";
import Movie from "./models/Movie.js";
import Bicycle from "./models/Bycicle.js";
import Motorcycle from "./models/Motorcycle.js";

// Importamos los datos
import computers from "./models/data/computersData.js";
import phones from "./models/data/phonesData.js";
import cars from "./models/data/carsData.js";
import movies from "./models/data/moviesData.js";
import bicycles from "./models/data/bycyclesData.js";
import motorcycles from "./models/data/motorcyclesData.js";

// Función para insertar datos
const insertData = async () => {
  try {
    await Computer.insertMany(computers);
    console.log("Computers added successfully!");

    await Phone.insertMany(phones);
    console.log("Phones added successfully!");

    await Car.insertMany(cars);
    console.log("Cars added successfully!");

    await Movie.insertMany(movies);
    console.log("Movies added successfully!");

    await Bicycle.insertMany(bicycles);
    console.log("Bicycles added successfully!");

    await Motorcycle.insertMany(motorcycles);
    console.log("Motorcycles added successfully!");

    console.log("✅ All data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    process.exit(1);
  }
};

// Ejecutamos la función
insertData();

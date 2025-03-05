import "dotenv/config.js"
import "../../config/database.js"
import Computer from "../Computer.js"


let computers = [
    {
      "nameDevice": "Galaxy S23 Ultra",
      "model": "SM-S918B",
      "brand": "Samsung",
      "RAM": "12GB",
      "storage": ["256GB", "512GB", "1TB"],
      "proccesor": {"name": "Snapdragon 8 Gen 2", "cores": 8, "speed": "3.36GHz"},
      "SO": {"name": "Android", "version": "13"}
    },
    {
      "nameDevice": "iPhone 15 Pro",
      "model": "A3101",
      "brand": "Apple",
      "RAM": "8GB",
      "storage": ["128GB", "256GB", "512GB", "1TB"],
      "proccesor": {"name": "A17 Pro", "cores": 6, "speed": "3.78GHz"},
      "SO": {"name": "iOS", "version": "17"}
    },
    {
      "nameDevice": "Pixel 8 Pro",
      "model": "G1",
      "brand": "Google",
      "RAM": "12GB",
      "storage": ["128GB", "256GB", "512GB"],
      "proccesor": {"name": "Google Tensor G3", "cores": 8, "speed": "3.0GHz"},
      "SO": {"name": "Android", "version": "14"}
    },
    {
      "nameDevice": "Xiaomi 13 Ultra",
      "model": "2304FPN6DC",
      "brand": "Xiaomi",
      "RAM": "16GB",
      "storage": ["256GB", "512GB", "1TB"],
      "proccesor": {"name": "Snapdragon 8 Gen 2", "cores": 8, "speed": "3.36GHz"},
      "SO": {"name": "Android", "version": "13"}
    },
    {
      "nameDevice": "OnePlus 11",
      "model": "CPH2449",
      "brand": "OnePlus",
      "RAM": "16GB",
      "storage": ["256GB", "512GB"],
      "proccesor": {"name": "Snapdragon 8 Gen 2", "cores": 8, "speed": "3.2GHz"},
      "SO": {"name": "Android", "version": "13"}
    },
    {
      "nameDevice": "ROG Phone 7",
      "model": "AI2205_C",
      "brand": "Asus",
      "RAM": "16GB",
      "storage": ["512GB", "1TB"],
      "proccesor": {"name": "Snapdragon 8 Gen 2", "cores": 8, "speed": "3.36GHz"},
      "SO": {"name": "Android", "version": "13"}
    },
    {
      "nameDevice": "MacBook Pro 16",
      "model": "A2780",
      "brand": "Apple",
      "RAM": "32GB",
      "storage": ["512GB", "1TB", "2TB", "4TB", "8TB"],
      "proccesor": {"name": "Apple M3 Max", "cores": 16, "speed": "4.1GHz"},
      "SO": {"name": "macOS", "version": "Sonoma"}
    },
    {
      "nameDevice": "Dell XPS 15",
      "model": "9530",
      "brand": "Dell",
      "RAM": "32GB",
      "storage": ["1TB", "2TB"],
      "proccesor": {"name": "Intel Core i9-13900H", "cores": 14, "speed": "5.4GHz"},
      "SO": {"name": "Windows", "version": "11 Pro"}
    },
    {
      "nameDevice": "HP Spectre x360",
      "model": "14-ea0023dx",
      "brand": "HP",
      "RAM": "16GB",
      "storage": ["512GB", "1TB"],
      "proccesor": {"name": "Intel Core i7-1365U", "cores": 10, "speed": "5.0GHz"},
      "SO": {"name": "Windows", "version": "11 Home"}
    },
    {
      "nameDevice": "Lenovo ThinkPad X1 Carbon",
      "model": "Gen 11",
      "brand": "Lenovo",
      "RAM": "16GB",
      "storage": ["512GB", "1TB"],
      "proccesor": {"name": "Intel Core i7-1370P", "cores": 12, "speed": "5.2GHz"},
      "SO": {"name": "Windows", "version": "11 Pro"}
    },
    {
      "nameDevice": "Samsung Galaxy Tab S9 Ultra",
      "model": "SM-X910",
      "brand": "Samsung",
      "RAM": "12GB",
      "storage": ["256GB", "512GB", "1TB"],
      "proccesor": {"name": "Snapdragon 8 Gen 2", "cores": 8, "speed": "3.36GHz"},
      "SO": {"name": "Android", "version": "14"}
    },
    {
      "nameDevice": "iPad Pro 12.9",
      "model": "A2437",
      "brand": "Apple",
      "RAM": "16GB",
      "storage": ["128GB", "256GB", "512GB", "1TB", "2TB"],
      "proccesor": {"name": "Apple M2", "cores": 8, "speed": "3.49GHz"},
      "SO": {"name": "iPadOS", "version": "17"}
    },
    {
      "nameDevice": "Razer Blade 16",
      "model": "RZ09-0483",
      "brand": "Razer",
      "RAM": "32GB",
      "storage": ["1TB", "2TB"],
      "proccesor": {"name": "Intel Core i9-13950HX", "cores": 24, "speed": "5.5GHz"},
      "SO": {"name": "Windows", "version": "11 Pro"}
    },
    {
      "nameDevice": "Microsoft Surface Laptop 5",
      "model": "1952",
      "brand": "Microsoft",
      "RAM": "16GB",
      "storage": ["256GB", "512GB", "1TB"],
      "proccesor": {"name": "Intel Core i7-1265U", "cores": 10, "speed": "4.8GHz"},
      "SO": {"name": "Windows", "version": "11 Home"}
    },
    {
      "nameDevice": "Alienware m18",
      "model": "AWM18",
      "brand": "Dell",
      "RAM": "64GB",
      "storage": ["2TB", "4TB"],
      "proccesor": {"name": "AMD Ryzen 9 7945HX", "cores": 16, "speed": "5.4GHz"},
      "SO": {"name": "Windows", "version": "11 Pro"}
    }
  ]
  


export default computers

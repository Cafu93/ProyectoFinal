//Importamos.
import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Estructura de la base de datos.
// const eviroment = async ()=>{
//     //Realizamos la conexion a la base de datos.
//     await mongoose.connect("mongodb+srv://Facu:Facu1234@cluster0.jr1ws.mongodb.net/EntregaFinal?retryWrites=true&w=majority&appName=Cluster0")

//     //Realizamos la carga de nuestros productos a la base de datos.
//     // let load = await producModel.insertMany([
//     //     {
//     //         title: "Manzanas",
//     //         description: "Las manzanas son un fruto comestible de la especie Malus domestica.",
//     //         code: 1111,
//     //         price: 100,
//     //         status: true,
//     //         stock: 200,
//     //         category: "Fruta",
//     //     },
//     //     {
//     //         title: "Naranjas",
//     //         description: "Las naranjas son una fruta citrica de forma redondeada.",
//     //         code: 2222,
//     //         price: 110,
//     //         status: true,
//     //         stock: 300,
//     //         category: "Fruta",
//     //     },
//     //     {
//     //         title: "Bananas",
//     //         description: "Las bananas son un fruto comestible de varios tipos de plantas herbaceas.",
//     //         code: 3333,
//     //         price: 300,
//     //         status: true,
//     //         stock: 500,
//     //         category: "Fruta",
//     //     }
//     // ])

//     // let loads = await producModel.aggregate([
//     //     //Stage.
//     //     {
//     //         $sort: {totalQuantity: -1} //Ordenamos de mayor a menor.
//     //     },
//     //     {

//     //     }
//     // ])
// }

// eviroment();

mongoose.connect("mongodb+srv://Facu:Facu1234@cluster0.jr1ws.mongodb.net/EntregaFinal?retryWrites=true&w=majority&appName=Cluster0")

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

//Importamos las rutas.
app.use("/", viewsRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`)
})
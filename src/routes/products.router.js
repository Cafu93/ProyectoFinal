// //Importamos.
// import {Router} from "express";
// import producModel from "../models/products.model.js";

// const router = Router()

// const producs = []

// //ENDPOINTS para los productos.

// //Mostramos los usuario de nuestra base de datos.
// router.get("/products", async(req, res)=>{
//     try {
//         //Creamos la variable "produc", lo q va a hacer es con el ".find" consultar a la base de datos.
//         let produc = await producModel.find() 
//         res.send({result: "success", payload: produc}) //Devolvemos un msj de resultado y los productos.

//     } catch (error) {
//         console.log(error)
//     }
// })

// export default router
//Importamos.
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

//Creamos la coleccion y la llamamos a "Productos".
const producCollection = "Productos"

//Creamos un esquema, q es el modelo de como modelamos nuestros datos para la base de datos.
const producSchema = new mongoose.Schema({
    //Aca dentro recibimos un objeto, donde tenemos las distintas propiedades q enviamos en la base de datos.
    // title: {type: String, require: true, max: 50},
    // description: {type: String, require: true, max: 100},
    // code: {type: Number, require: true},
    // price: {type: Number, require: true},
    // status: {type: Boolean, require: true},
    // stock: {type: Number, require: true},
    // category: {type: String, require: true, max: 50},
    title: String,
    description: String,
    code: Number,
    price: Number,
    status: Boolean,
    stock: Number,
    category: String
})

producSchema.plugin(mongoosePaginate);
//Creamos una constante, donde le enviamos nuestras constantes creadas ("producCollection" y "producSchema") a nuestra base de datos.
const producModel = mongoose.model(producCollection, producSchema);
//Exportamos nuestro "producModel".
export default producModel;
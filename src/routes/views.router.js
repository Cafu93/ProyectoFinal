import { Router } from "express";
import producModel from "../models/products.model.js";

const router = Router();

router.get("/", (req, res) => {
    res.render('index')
})

router.get("/products", async (req, res) =>{

    let page = parseInt(req.query.page);

    if(!page) page = 1;

    let result = await producModel.paginate({}, {page, limit: 10, lean: true}) //Definimos la pagina y el limite por pagina.
    //Si tenemos pagina previa, nos la muestra.
    result.prevLink = result.hasPrevPage 
    ? `http://localhost:8080/products?page=${result.prevPage}` : "";
    //Si tenemos pagina siguiente, tambien la mostrara.
    result.nextLink = result.hasNextPage 
    ? `http://localhost:8080/products?page=${result.nextPage}` : "";

    result.isValid = !(page <= 0 || page > result.totalPages)
    res.render('products', result);
})

export default router;
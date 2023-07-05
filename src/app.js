import express from "express";
import { ProductManager } from "./ProductManager.js";

const port = 8080;

//creamos la aplicacion del servidor
const app = express();

//crear la instancia de la clase
const productService = new ProductManager(`./src/products.json`);

//levantar el servidor
app.listen(port, () => console.log(`El servidor está escuchando en el puerto ${port}`));

//definimos las rutas
app.get("/products", async (req, res) => {
  try {
    const result = await productService.getProducts();
    const limite = parseInt(req.query.limit);
    const resultado = limite ? result.slice(0, limite) : result;
    res.send(resultado);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/products/:pid", async (req, res) => {
  try {
    const pid = parseInt(req.params.pid);
    if (isNaN(pid)) {
      res.send("El id debe ser un número");
      return;
    }
    const result = await productService.getProductById(pid);
    if (!result) {
      res.send("El producto no existe");
    } else {
      res.send(result);
    }
  } catch (error) {
    res.send(error.message);
  }
});
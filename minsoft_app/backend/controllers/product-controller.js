// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const Product = require('./../models/product-model');
const products = [];

// POST
const createProduct = (request, response) => {
  const product = request.body;
  const newProduct = new Product(product);
  newProduct.save((error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

/// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const Sale = require("./../models/sale-model");
const Sales = [];

// POST
const createSale = (request, response) => {
  const newSale = new Sale(request.body);
  newSale.save((error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

// GET
const readSales = async (request, response) => {
  const id = await request.query._id;
  const clientId = await request.query.clientId;
  const clientName = await request.query.clientName;
  const saleDate = await request.query.saleDate;

  const filter = {};
  if (id) {
    filter._id = id;
  }
  if (clientId) {
    filter.clientId = clientId;
  }
  if (clientName) {
    filter.clientName = clientName;
  }
  if (saleDate) {
    filter.saleDate = saleDate;
  }

  Sale.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

//GET By Id
const searchSales = async (request, response) => {
  const saleSearched = await Sale.findById(request.params.id);
  if (!saleSearched) {
    return response.status(400).send({ error: "No existe venta con ese Id" });
  }
  return response.json(saleSearched);
};

// PATCH
const updateSale = async (request, response) => {
  const idSale = await request.params.id;
  if (!idSale) {
    return response.status(400).send({ error: "No hay venta para modificar" });
  }

  Sale.updateOne({ _id: idSale }, request.body, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }

    Sale.find({ _id: idSale }, (error, result) => {
      if (error) {
        return response.status(500).send({ error });
      }
      return response.status(200).send(result);
    });
  });
};

// DELETE
const deleteSale = (request, response) => {
  const idSale = request.params.id;
  if (!idSale) {
    return response.status(400).send({ error: "No hay id, para eliminar" });
  }
  Sale.remove({ _id: idSale }, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.status(200).send(result);
  });
};

module.exports = {
  createSale,
  readSales,
  updateSale,
  deleteSale,
  searchSales
};

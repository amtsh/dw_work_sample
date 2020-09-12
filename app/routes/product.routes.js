module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all Products
  router.get("/", products.findAll);

  // Retrieve a single Product with id
  router.get("/:id", products.findOne);

  app.use("/api/products", router);
};

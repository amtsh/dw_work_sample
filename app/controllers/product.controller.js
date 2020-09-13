const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Product
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    taxIncluded: req.body.taxIncluded ? req.body.taxIncluded : true,
    freeShipping: req.body.freeShipping ? req.body.freeShipping : true,
    prepaidOnly: req.body.prepaidOnly ? req.body.prepaidOnly : true,
  };

  console.log("---------------------product");
  console.log(product);

  // Save Product in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("---------------------error");
      console.log(error);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Product.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id,
      });
    });
};

// Update a Product by the id in the request
// exports.update = (req, res) => {};

// Delete a Product with the specified id in the request
// exports.delete = (req, res) => {};

// Delete all Products from the database.
// exports.deleteAll = (req, res) => {};

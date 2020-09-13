const db = require("../models");
const Asset = db.assets;
const Op = db.Sequelize.Op;

// Create and Save a new Asset
exports.create = (req, res) => {
  // Validate request
  if (!req.body.url) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Asset
  const asset = {
    url: req.body.url,
  };

  // Save Asset in the database
  Asset.create(asset)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Asset.",
      });
    });
};

// Find a single Asset with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Asset.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Asset with id=" + id,
      });
    });
};

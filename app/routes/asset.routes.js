module.exports = (app) => {
  const assets = require("../controllers/asset.controller.js");

  var router = require("express").Router();

  // Create a new Asset
  router.post("/", assets.create);

  // Retrieve a single Asset with id
  router.get("/:id", assets.findOne);

  app.use("/api/assets", router);
};

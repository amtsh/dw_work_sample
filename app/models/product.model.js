// This Sequelize Model represents products table in PostgreSQL database.
// These columns will be generated automatically: id, name, description, price, color, assetIds, createdAt, updatedAt.
module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    // Following should be in a different table/model and mapped to product
    color: {
      type: Sequelize.ENUM,
      values: ["Rose Gold", "Silver"],
    },
    size: {
      type: Sequelize.ENUM,
      values: ["Free Size", "28"],
    },
    taxIncluded: {
      type: Sequelize.BOOLEAN,
    },
    freeShipping: {
      type: Sequelize.BOOLEAN,
    },
    prepaidOnly: {
      type: Sequelize.BOOLEAN,
    },
    assetIds: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  });

  return Product;
};

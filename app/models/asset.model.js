// This Sequelize Model represents assets table in PostgreSQL database.
// These columns will be generated automatically: id, url, createdAt, updatedAt.
module.exports = (sequelize, Sequelize) => {
  const Asset = sequelize.define("asset", {
    url: {
      type: Sequelize.STRING,
    },
  });

  return Asset;
};

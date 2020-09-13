// Initialize Sequelize
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
let sequelize;

console.log("Value of process.env");
console.log(process.env);

if (process.env.DATABASE_URL) {
  console.log("In process.env.DATABASE_URL");
  console.log(process.env.DATABASE_URL);

  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: true, //false
  });
} else {
  console.log("else process.env.DATABASE_URL");
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./product.model.js")(sequelize, Sequelize);

module.exports = db;

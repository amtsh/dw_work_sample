module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  // API reference for the Sequelize constructor
  // https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

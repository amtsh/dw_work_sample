const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const db = require("./app/models");
const routes = require("./app/routes/product.routes");

const app = express();
db.sequelize.sync();

// In development, might need to drop existing tables & re-sync database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

var corsOptions = {
  origin: ["http://localhost:8080", "http://localhost:3000"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serves all our static files from the build directory
// build folder is generated in react-hooks-crud folder via 'npm run build'
app.use(express.static(path.join(__dirname, "react-hooks-crud/build")));

// serves the index.html file on any unknown routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "react-hooks-crud/build", "index.html"));
});

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Hello world!" });
// });

routes(app);
// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

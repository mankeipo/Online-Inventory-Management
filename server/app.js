const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;
const db = require('./models')
const routes = require("./controllers");

// const { Product } = require('./models');

// Middleware
app.use(bodyParser.json());
app.use("/api", routes);

// Database connection
const sequelize = new Sequelize('stock', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
});
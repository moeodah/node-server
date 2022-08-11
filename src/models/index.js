const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  'employees',
  'root',
  'Geniune9',
  { 
    dialect:'mysql'},
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

sequelize.authenticate().then(() => {
  console.log("Connection Succesful");
}).catch((err) => {
  console.log("Error connecting")
});


fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  'defaultdb',
  'doadmin',
  'AVNS_v-9sgkqPx73qNL1O8G4',
  { 
    host:'beez-employees-do-user-12201662-0.b.db.ondigitalocean.com',
    port:'25060',
    dialect:'mysql',
  }
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

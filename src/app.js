const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use (bodyParser.urlencoded({extended:true}));

app.use(cors())


require('./routes')(app)

sequelize.sync({})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  }).catch((err) => {
    console.log("something is wrong")
  });

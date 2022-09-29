const path = require('path')

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'beez-db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Geniune9',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'beez-db.cattuqqlakw7.ap-south-1.rds.amazonaws.com',
      storage: path.resolve(__dirname, '../../tabtracker.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

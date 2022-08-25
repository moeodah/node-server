const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
      name: DataTypes.STRING,
      gender:DataTypes.STRING,
      education:DataTypes.STRING,
      email1:DataTypes.STRING,
      email2: DataTypes.STRING,
      phoneNumber1:DataTypes.STRING,
      phoneNumber2:DataTypes.STRING,
      address1:DataTypes.STRING,
      address2:DataTypes.STRING,
      civilId:DataTypes.STRING,
      civilIdExpiry:DataTypes.DATE,
      DOB:DataTypes.DATE,
      driverLicenseExpiry:DataTypes.DATE,
      passportId:DataTypes.STRING,
      passportIdExpiry:DataTypes.DATE,
      jobTitle:DataTypes.STRING,
      dateOfHire:DataTypes.DATE,
      bankAccountNumber:DataTypes.STRING,
      Iban:DataTypes.STRING,
      bankName:DataTypes.STRING,
      salary:DataTypes.STRING,
      Martial:DataTypes.STRING,
      nationality:DataTypes.STRING,
      securityLevel:DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password:DataTypes.STRING,    
    },  
    {
      hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
      }
    }
    )

  Employee.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  Employee.associate = function (models) {
  }

  return Employee
}
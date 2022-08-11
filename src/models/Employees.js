
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

  })
  return Employee
}
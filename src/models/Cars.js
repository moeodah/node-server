module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        model: DataTypes.STRING,
        branch: DataTypes.STRING,
        color: DataTypes.STRING,
        plateNumber: DataTypes.STRING,
        chassis: DataTypes.STRING,
        year: DataTypes.STRING,
        oula: DataTypes.STRING,
        employee: DataTypes.STRING,
        milage: DataTypes.STRING,
        addedBy: DataTypes.STRING,
        registrationUpload: DataTypes.STRING,
        insuranceUpload: DataTypes.STRING,
        stickerUpload: DataTypes.STRING,
        other1Upload: DataTypes.STRING,
        other2Upload: DataTypes.STRING,
        other3Upload: DataTypes.STRING,
    })
    return Car
  }
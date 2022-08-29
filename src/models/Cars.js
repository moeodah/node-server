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
        carTap1:DataTypes.STRING,
        carTap2:DataTypes.STRING,
        carTap3:DataTypes.STRING,
        carTap4:DataTypes.STRING,
        carTap5:DataTypes.STRING,
        carTap6:DataTypes.STRING,
        carTap7:DataTypes.STRING,
        carTap8:DataTypes.STRING,
        carTap9:DataTypes.STRING,
        carTap10:DataTypes.STRING,
        carTap11:DataTypes.STRING,
        carTap12:DataTypes.STRING,
    })
    return Car
  }
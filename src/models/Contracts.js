module.exports = (sequelize, DataTypes) => {
    const Contract = sequelize.define('Contract', {
        influName: DataTypes.STRING,
        visits: DataTypes.STRING,
        homes: DataTypes.STRING,
        duration: DataTypes.STRING,
        cost: DataTypes.STRING,
        remaining: DataTypes.STRING,
        position: DataTypes.STRING,
        dateAdded: DataTypes.DATE,
        startDate: DataTypes.STRING,
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
    return Contract
  }
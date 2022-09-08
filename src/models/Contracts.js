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
    })
    return Contract
  }
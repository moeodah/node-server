module.exports = (sequelize, DataTypes) => {
    const Milage = sequelize.define('Milage', {
        name: DataTypes.STRING,
        milage: DataTypes.STRING,
        date: DataTypes.STRING,
        addedBy: DataTypes.STRING,
    })
    return Milage
  }
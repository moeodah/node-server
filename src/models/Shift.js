module.exports = (sequelize, DataTypes) => {
    const Shift = sequelize.define('Shift', {
        name: DataTypes.STRING,
        date:DataTypes.DATE,
        start:DataTypes.TIME,
        end:DataTypes.TIME,
        color: DataTypes.STRING,
        shift:DataTypes.STRING,
    })
    return Shift
  }
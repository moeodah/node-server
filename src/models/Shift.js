module.exports = (sequelize, DataTypes) => {
    const Shift = sequelize.define('Shift', {
        name: DataTypes.STRING,
        date:DataTypes.DATE,
        start:DataTypes.TIME,
        end:DataTypes.TIME,
        color: DataTypes.STRING,
        shiftTap1:DataTypes.STRING,
        shiftTap2:DataTypes.STRING,
        shiftTap3:DataTypes.STRING,
        shiftTap4:DataTypes.STRING,
        shiftTap5:DataTypes.STRING,
        shiftTap6:DataTypes.STRING,
        shiftTap7:DataTypes.STRING,
        shiftTap8:DataTypes.STRING,
        shiftTap9:DataTypes.STRING,
        shiftTap10:DataTypes.STRING,
        shiftTap11:DataTypes.STRING,
        shiftTap12:DataTypes.STRING,
    })
    return Shift
  }
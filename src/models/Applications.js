module.exports = (sequelize, DataTypes) => {
    const Applications = sequelize.define('Applications', {
        name:DataTypes.STRING,
        type:DataTypes.STRING,
        numOfDates:DataTypes.STRING,
        startDate:DataTypes.DATE,
        endDate:DataTypes.DATE,
        todayDate:DataTypes.DATE,
        reason:DataTypes.STRING,
        status:DataTypes.STRING,
        uploads:DataTypes.BLOB,
    })
    return Applications
  }
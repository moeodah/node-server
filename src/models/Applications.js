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
        applicationTap1:DataTypes.STRING,
        applicationTap2:DataTypes.STRING,
        applicationTap3:DataTypes.STRING,
        applicationTap4:DataTypes.STRING,
        applicationTap5:DataTypes.STRING,
        applicationTap6:DataTypes.STRING,
        applicationTap7:DataTypes.STRING,
        applicationTap8:DataTypes.STRING,
        applicationTap9:DataTypes.STRING,
        applicationTap10:DataTypes.STRING,
        applicationTap11:DataTypes.STRING,
        applicationTap12:DataTypes.STRING,
    })
    return Applications
  }
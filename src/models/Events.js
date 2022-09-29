module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        name: DataTypes.STRING,
        eventType: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        day1: DataTypes.DATE,
        daysChoice: DataTypes.STRING,
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
        color: DataTypes.STRING,
        timed: DataTypes.BOOLEAN,
        location: DataTypes.STRING,
        visitors: DataTypes.STRING,
        addedBy: DataTypes.STRING,
        comments: DataTypes.STRING,
    })
    return Event
  }
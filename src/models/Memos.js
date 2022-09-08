module.exports = (sequelize, DataTypes) => {
    const Memos = sequelize.define('Memos', {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        date:DataTypes.DATE,
        memo: DataTypes.STRING,
        superVisor: DataTypes.STRING,
    })
    return Memos
  }
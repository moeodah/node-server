module.exports = (sequelize, DataTypes) => {
    const Uploads = sequelize.define('Uploads', {
        fileName: DataTypes.STRING,
    })
    return Uploads
  }
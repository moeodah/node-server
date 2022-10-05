module.exports = (sequelize, DataTypes) => {
    const Uploads = sequelize.define('Uploads', {
        file: DataTypes.BLOB,
    })
    return Uploads
  }
module.exports = (sequelize, DataTypes) => {
    const DocCategory = sequelize.define('DocCategory', {
        name: DataTypes.STRING,
        dateAdded: DataTypes.STRING,
        addedBy: DataTypes.STRING,
    })
    return DocCategory
  }
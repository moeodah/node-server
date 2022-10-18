module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define('Document', {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        expiry: DataTypes.DATE,
        dateAdded: DataTypes.DATE,
        addedBy: DataTypes.STRING,
        file: DataTypes.STRING,
    })
    return Document
  }
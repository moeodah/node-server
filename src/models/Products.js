module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        countryOfOrigin: DataTypes.STRING,
        quantity: DataTypes.STRING,
        cost: DataTypes.STRING,
        comment: DataTypes.STRING,
        price: DataTypes.STRING,
        weight: DataTypes.STRING,
        dateOfPurchase: DataTypes.DATE,
        addedBy: DataTypes.STRING,
    })
    return Product
  }
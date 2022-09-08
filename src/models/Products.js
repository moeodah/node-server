module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        brandName: DataTypes.STRING,
        countryOfOrigin: DataTypes.STRING,
        quantity: DataTypes.STRING,
        cost: DataTypes.STRING,
        comment: DataTypes.STRING,
        price: DataTypes.STRING,
        grossWeight: DataTypes.STRING,
        netWeight: DataTypes.STRING,
        length: DataTypes.STRING,
        height: DataTypes.STRING,
        width: DataTypes.STRING,
        barcode: DataTypes.STRING,
        SKU: DataTypes.STRING,
        cartonBarcode: DataTypes.STRING,
        dateOfPurchase: DataTypes.DATE,
        boxWeight: DataTypes.STRING,
        boxHeight: DataTypes.STRING,
        boxLength: DataTypes.STRING,
        boxWidth: DataTypes.STRING,
        addedBy: DataTypes.STRING,
        
    })
    return Product
  }
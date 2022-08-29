module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        brandName: DataTypes.STRING,
        countryOfOrigin: DataTypes.STRING,
        quantity: DataTypes.STRING,
        cost: DataTypes.STRING,
        comment: DataTypes.STRING,
        price: DataTypes.STRING,
        weight: DataTypes.STRING,
        netWeight: DataTypes.STRING,
        length: DataTypes.STRING,
        height: DataTypes.STRING,
        barcode: DataTypes.STRING,
        SKU: DataTypes.STRING,
        cartonBarcode: DataTypes.STRING,
        dateOfPurchase: DataTypes.DATE,
        addedBy: DataTypes.STRING,
        productTap1:DataTypes.STRING,
        productTap2:DataTypes.STRING,
        productTap3:DataTypes.STRING,
        productTap4:DataTypes.STRING,
        productTap5:DataTypes.STRING,
        productTap6:DataTypes.STRING,
        productTap7:DataTypes.STRING,
        productTap8:DataTypes.STRING,
        productTap9:DataTypes.STRING,
        productTap10:DataTypes.STRING,
        productTap11:DataTypes.STRING,
        productTap12:DataTypes.STRING,
        
    })
    return Product
  }
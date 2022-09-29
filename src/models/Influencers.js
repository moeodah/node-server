module.exports = (sequelize, DataTypes) => {
    const Influencer = sequelize.define('Influencer', {
        name:DataTypes.STRING,
        nationality:DataTypes.STRING,
        snapchat: DataTypes.STRING,
        insta: DataTypes.STRING,
        famous: DataTypes.STRING,
        twitter: DataTypes.STRING,
        tiktok: DataTypes.STRING,
        phoneNumber1: DataTypes.STRING,
        phoneNumber2: DataTypes.STRING,
        discount: DataTypes.STRING,
        costPerAd: DataTypes.STRING,
        addedBy: DataTypes.STRING,
    })
    return Influencer
  }
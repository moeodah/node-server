module.exports = (sequelize, DataTypes) => {
    const Influencer = sequelize.define('Influencer', {
        name:DataTypes.STRING,
        nationality:DataTypes.STRING,
        social:DataTypes.STRING,
        famous:DataTypes.STRING,
        discount:DataTypes.STRING,
        costPerAd:DataTypes.STRING,
    })
    return Influencer
  }
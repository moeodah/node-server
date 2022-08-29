module.exports = (sequelize, DataTypes) => {
    const Influencer = sequelize.define('Influencer', {
        name:DataTypes.STRING,
        nationality:DataTypes.STRING,
        social:DataTypes.STRING,
        famous:DataTypes.STRING,
        discount:DataTypes.STRING,
        costPerAd:DataTypes.STRING,
        influencerTap1:DataTypes.STRING,
        influencerTap2:DataTypes.STRING,
        influencerTap3:DataTypes.STRING,
        influencerTap4:DataTypes.STRING,
        influencerTap5:DataTypes.STRING,
        influencerTap6:DataTypes.STRING,
        influencerTap7:DataTypes.STRING,
        influencerTap8:DataTypes.STRING,
        influencerTap9:DataTypes.STRING,
        influencerTap10:DataTypes.STRING,
        influencerTap11:DataTypes.STRING,
        influencerTap12:DataTypes.STRING,
    })
    return Influencer
  }
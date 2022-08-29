module.exports = (sequelize, DataTypes) => {
    const Memos = sequelize.define('Memos', {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        date:DataTypes.DATE,
        memo: DataTypes.STRING,
        superVisor: DataTypes.STRING,
        MemoTap1:DataTypes.STRING,
        MemoTap2:DataTypes.STRING,
        MemoTap3:DataTypes.STRING,
        MemoTap4:DataTypes.STRING,
        MemoTap5:DataTypes.STRING,
        MemoTap6:DataTypes.STRING,
        MemoTap7:DataTypes.STRING,
        MemoTap8:DataTypes.STRING,
        MemoTap9:DataTypes.STRING,
        MemoTap10:DataTypes.STRING,
        MemoTap11:DataTypes.STRING,
        MemoTap12:DataTypes.STRING,
    })
    return Memos
  }
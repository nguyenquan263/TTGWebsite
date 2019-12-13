/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admins', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USERNAME: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    PASSWORD: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ROLE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    STATUS: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'admins'
  });
};

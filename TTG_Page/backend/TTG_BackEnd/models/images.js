/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    ALBUM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'albums',
        key: 'ID'
      }
    },
    STATUS: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'images'
  });
};

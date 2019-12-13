/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogs', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TITLE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    THUMBNAIL_PIC: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    CONTENT: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    UPLOAD_DATE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    STATUS: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'blogs'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('youtube_clips', {
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
    LINK: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    DETAIL_INFO: {
      type: DataTypes.STRING(500),
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
    tableName: 'youtube_clips'
  });
};

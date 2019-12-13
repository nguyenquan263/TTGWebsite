/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qandas', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    QUESTION_CONTENT: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    ANSWER_CONTENT: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SENDER_EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IS_PRIVATE: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'qandas'
  });
};

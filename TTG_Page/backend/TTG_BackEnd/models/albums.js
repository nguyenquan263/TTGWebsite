/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('albums', {
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
        THUMBNAIL_PICTURE: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        UPLOAD_DATE: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        CONTENT: {
            type: DataTypes.STRING(1000000),
            allowNull: false
        },
        REF_LINK: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        STATUS: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    }, {
        tableName: 'albums'
    });
};
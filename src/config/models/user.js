'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        is_superuser: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        user_auth: {
            type: DataTypes.STRING,
            allowNull: true
        },
        admin_auth: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {underscored: true});
    user.associate = function(models) {
        // associations can be defined here
    };
    return user;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const inactive_company_list = sequelize.define('inactive_company_list', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
  }, {
    underscored: true,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  inactive_company_list.associate = function(models) {
    // associations can be defined here
  };
  return inactive_company_list;
};
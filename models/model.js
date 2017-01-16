"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", { 
    name: {
      type: DataTypes.STRING
    }, 
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique:true
    }, 
    role: {
      type: DataTypes.ENUM('admin','superadmin','user'),
    },
    password: {
      type: DataTypes.STRING
    },
  }, {
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    classMethods: { }
  });

  return user;
};

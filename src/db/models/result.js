'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Result.associate = function(models) {
    // associations can be defined here
  };
  return Result;
};
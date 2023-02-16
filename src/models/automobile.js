'use strict';

const automobileSchema = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('Vehicles', {
    wheels: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    massKG: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    yearMade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  })
};

module.exports = automobileSchema;

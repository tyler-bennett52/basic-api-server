'use strict';

const humanBeingSchema = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('HUMAN', {
    heightInches: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    massKG: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eyeColor: {
      type: DataTypes.ENUM,
      values: ['blue', 'brown', 'green', 'hazel'],
      allowNull: true,
    }
  })
};

module.exports = humanBeingSchema;

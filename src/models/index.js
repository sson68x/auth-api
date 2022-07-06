'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users');
const clothesModel = require('./clothes');
const foodModel = require('./food');
const Collection = require('./data-collection.js');

// Updated the below
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users,
  food: new Collection(food),
  clothes: new Collection(clothes),
}

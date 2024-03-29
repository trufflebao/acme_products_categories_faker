const Category = require('./Category');
const Product = require('./Product');
const db = require('../db');

Product.belongsTo(Category);
Category.hasMany(Product, {onDelete: 'cascade'});

module.exports = {
  db,
  Category,
  Product,
};

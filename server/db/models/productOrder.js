const Sequelize = require('sequelize')
const db = require('../db')

const ProductOrder = db.define('productOrder', {
  quantity: Sequelize.INTEGER
})

module.exports = ProductOrder

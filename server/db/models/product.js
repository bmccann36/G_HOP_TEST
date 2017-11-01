

const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING
  }
})



// Product.create({name: 'pogo', category: 'toy'})
// User.create({email: 'murphy@email.com', password: '123'})



module.exports = Product

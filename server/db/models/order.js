

const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER
  }
})



// User.create({email: 'murphy@email.com', password: '123'})



module.exports = Order

const db = require('./db')

// register models
require('./models')

module.exports = db

// here is what I made in branch1

function before(you){
  const puppy = 'pupy'
  const a = 'b'
  return 'some more logic...'
}


// this was on line 7 in branch2


function check(yourself ){
  var a = 3
  var b = 7
  return 'some other logic'
}


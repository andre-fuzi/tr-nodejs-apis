const util = require('util')

function getUser() {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      return resolve({
        id: 1,
        name: 'Batman',
        birthday: new Date(),
      })
    }, 1000)
  })
}

function getUserContact(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve({
        phone: '99999999',
        ddd: '99'
      })
    }, 1000)
  })
}

function getUserAddress(userId, callback) {
  setTimeout(function () {
    return callback(null, {
      street: 'Rua logo ali',
      number: 111
    })
  }, 1000)
}

const getUserAddressAsync = util.promisify(getUserAddress)


module.exports = {
  getUser,
  getUserContact,
  getUserAddress,
  getUserAddressAsync
}
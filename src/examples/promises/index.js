const { getUser, getUserContact, getUserAddressAsync } = require('./../_base/api.js')

const userInfo = getUser()

userInfo
  .then(function (user) {
    return getUserContact(user.id)
      .then(function (contact) {
        return {
          user,
          contact,
        }
      })
  })
  .then(function (result) {
    return getUserAddressAsync(result.user.id)
      .then(function (address) {
        return Object.assign({}, result, { address })
      })
  })
  .then(function (result) {
    console.log(result)
  })
  .catch(function (err) {
    console.log('Something went wrong - ', err)
  })
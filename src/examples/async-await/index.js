const { getUser, getUserContact, getUserAddressAsync } = require('./../_base/api.js')

async function main() {
  console.time('promise-media')
  const user = await getUser()
  // const phone = await getUserContact(user.id)
  // const address = await getUserAddressAsync(user.id)
  const promise = await Promise.all([getUserContact(user.id), getUserAddressAsync(user.id)])

  // return {
  //   user,
  //   contact: promise[0],
  //   address: promise[1]
  // }
  console.log({
    user,
    phone: promise[0],
    address: promise[1]
  })

  console.timeEnd('promise-media')
}

main()
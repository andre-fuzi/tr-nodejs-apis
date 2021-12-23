const swapi = require('./../../_base/services/swapi.js')()

Array.prototype.newMap = function(callback) {
  const newArray = []
  for (let i = 0; i <= this.length - 1; i++) {
    const result = callback(this[i], i)
    newArray.push(result)
  }
  return newArray
}

async function main() {
  try {
    const response = await swapi.search('a')
    const names = response.data.results.newMap(function(people, index) {
      return `[${index}] ${people.name}`
    })
    console.log(names)
  } catch(err) {
    console.error('Error', err)
  }
}

main()
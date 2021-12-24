const swapi = require('./../../_base/services/swapi')()

Array.prototype.newReduce = function(callback, initialValue) {
  let value = typeof initialValue !== undefined ? initialValue : this[0]
  for (let index = 0; index <= this.length -1; index++) {
    value = callback(value, this[index], this)
  }
  return value
}

async function main() {
  try {
    const { data } = await swapi.search('a')
    const height = data.results.newReduce((acc, item) => {
      return acc + parseInt(item.height)
    }, 0)
    console.log('Total Height - ', height)
    const myList = [
      ['Andre', 'Kaoru'],
      ['Node', 'JavaScript']
    ]
    const concatList = myList.newReduce((acc, item) => {
      return item.concat(acc)
    }, [])
    console.log('concatList - ',concatList)
  } catch (error) {
    console.error('Error - ', error)
  }
}

main()
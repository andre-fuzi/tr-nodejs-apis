const swapi = require('./../../_base/services/swapi')()

Array.prototype.newFilter = function(callback) {
  const list = []
  for (index in this) {
    const item = this[index]
    const filtered = callback(item, index, this)
    if (!filtered) continue
    list.push(item)
  }
  return list
}

async function main() {
  try {
    const { data } = await swapi.search('a')

    if (data) {
      const familyLars = data.results.newFilter((item) => {
        return item.name.toLowerCase().indexOf('lars') !== -1
      })
      const names = familyLars.map((people) => people.name)
      console.log(names)
    }
  } catch(err) {
    console.error('Error - ', err)
  }
}

main()
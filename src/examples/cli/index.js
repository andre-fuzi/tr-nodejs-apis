const Commander = require('commander')

const Database = require('./database')
const Hero = require('./hero')

async function main() {
  Commander
    .version('v0')
    .option('-n, --name [value]', 'Set Hero name')
    .option('-p, --power [value]', 'Set Hero Power')
    .option('-i, --id [value]', 'Set Hero id')
    .option('-l, --list', 'Get hero')
    .option('-c, --create', 'Get hero')
    .option('-d, --delete [value]', 'delete hero')
    .option('-u, --update [value]', 'delete hero')
    .parse(process.argv)

  const options = Commander.opts()
  const hero = new Hero(options)

  try {
    if (options.list) {
      const result = await Database.getHeroes(hero.id)
      if (result) {
        console.log(result)
      }
    }
    if (options.create) {
      const result = await Database.createHero(hero)
      if (result) {
        console.log(result)
      }
    }
    if (options.delete) {
      const deleted = await Database.delete(parseInt(options.delete))
      if (deleted) {
        console.log(parseInt(options.delete) ? `Hero with ID ${options.delete} deleted` : `All Heroes Deleted`)
      }
    }
    if (options.update) {
      const { name, power } = hero
      const payload = {}
      if (name)  payload.name = name
      if (power)  payload.power = power
      const result = await Database.updateHeroe(parseInt(options.update), payload)
      if (result) {
        console.log('Hero updated', result)
      }
    }
    
  } catch (error) {
    console.error('Something Bad Happened! ', error)
  }
}

main()
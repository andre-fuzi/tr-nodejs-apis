const { deepEqual } = require('assert')

const database = require('./database')

const DEFAULT_ITEM = {
  name: 'Flash',
  power: 'Speed',
  id: 1,
}

describe('Heroes Manipulation', () => {
  before(async () => {
    await database.delete()
    await database.createHero(DEFAULT_ITEM)
  })

  it('search a Heroe in file', async () => {
    const expected = DEFAULT_ITEM
    const [result] = await database.getHeroes(expected.id)

    deepEqual(expected, result)
  })

  it('create new Hero', async () => {
    const hero = { name: 'Wonder Woman', power: 'Bad Ass', id: Date.now() }
    const result = await database.createHero(hero)

    deepEqual(result, hero)
  })

  it('delete Hero by ID', async () => {
    const result = await database.delete(DEFAULT_ITEM.id)
    deepEqual(result, true)
  })

  it('update hero info', async () => {
    await database.createHero(DEFAULT_ITEM)
    const updateData = {
      name: 'Batman',
      power: 'Rich',
    }
    const updateHero = {
      ...DEFAULT_ITEM,
      ...updateData,
    }

    const result = await database.updateHeroe(updateHero.id, updateData)

    deepEqual(result, updateHero)
  })
})
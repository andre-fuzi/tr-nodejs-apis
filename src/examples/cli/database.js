const { readFile, writeFile, write } = require('fs')
const { promisify } = require('util')

const readFilePromise = promisify(readFile)
const writeFilePromise = promisify(writeFile)

class Database {

  constructor() {
    this.FILE_NAME = './src/examples/cli/heroes.json'
  }

  async fetchFile() {
    const file = await readFilePromise(this.FILE_NAME, 'utf8')
    return JSON.parse(file.toString())
  }
  async writeInFile(data) {
    await writeFilePromise(this.FILE_NAME, JSON.stringify(data))
    return true
  }

  async getHeroes(id) {
    const fileData = await this.fetchFile()
    const filteredData = fileData.filter((item) => id ? item.id == id : true)
    return filteredData
  }
  async createHero(hero) {
    const id = hero.id || Date.now()
    const newHero = {
      ...hero,
      id,
    }
    const data = await this.fetchFile()
    data.push(newHero)
    const success = await this.writeInFile(data)
    return success ? newHero : false
  }
  async delete(id) {
    if (typeof id !== 'number' || Number.isNaN(id)) {
      await this.writeInFile([])
      return true
    }
    const data = await this.fetchFile()
    const index = this.findHeroIndex(data, id)
    data.splice(index, 1)
    return this.writeInFile(data)
  }
  async updateHeroe(id, payload) {
    if (typeof id !== 'number' ) {
      throw Error('Bad request! Must provide a ID')
    }
    if (!payload) {
      throw Error('Bad request! Must provide a hero')
    }
    const data = await this.fetchFile()
    const index = this.findHeroIndex(data, id)
    data[index] = {
      ...data[index],
      ...payload,
    }
    const result = await this.writeInFile(data)
    return result ? data[index] : false
  }

  findHeroIndex(data, id) {
    const index = data.findIndex((el) => el.id === id)
    if (index < 0) {
      throw Error('Not Found! There is no heroe with this ID')
    }
    return index
  }
}

module.exports = new Database()
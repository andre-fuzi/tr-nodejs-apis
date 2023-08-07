const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('Item Criado no Postgres')
  }
}

module.exports = Postgres